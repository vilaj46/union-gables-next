import { useState, useEffect } from "react";
import styled from "styled-components";

import { Hamburger } from "../../../@core/components/Hamburger";
import { HeaderLink } from "./HeaderLink";
import { Logo } from "../Logo";

import device from "../../../styles/device";

/**
 * Check mobile scaling for everything.
 *
 * Clean up the scaling its ugly with how thick it is.
 *
 * Check to make sure the links are clear and far away.
 *
 * Need a proper Hamburger.
 *
 * If we scroll or click off the header close the dropdown.
 */

// const Hamburger = styled.span`
//   display: inline-block;
//   margin-top: 16px;

// &:hover {
//   cursor: pointer;
// }

// @media ${device.tablet} {
//   display: none;
// }
// `;

const HeaderContainer = styled.header`
  display: ${({ theme }) => theme.fonts.droid};
  z-index: 30;
`;

const LinksContainer = styled.div`
  display: ${(props) => (props.displayDropdown ? "flex" : "none")};
  flex-direction: column;
  width: 100%;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const ScrollingNavbar = styled.nav`
  background: rgba(104, 7, 39, 0.8);
  color: #ffffff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 30;

  @media ${device.cs} {
    display: ${(props) => (props.isScrolling ? "block" : "none")};
  }
`;

const RegularNavbarWithoutScrolling = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  display: none;
  left: 50%;
  overflow: hidden;
  position: absolute;
  transform: translate(-50%, 0);
  width: 100%;
  z-index: 30;

  @media ${device.cs} {
    display: block;
  }
`;

export const Header = ({ links }) => {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNavigation = (e) => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else if (window.scrollY <= 5) {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [isScrolling]);
  return (
    <HeaderContainer>
      {!isScrolling && (
        <RegularNavbarWithoutScrolling>
          <LinksList>
            <Logo />
            {links.map((link) => (
              <HeaderLink key={link.href} link={link} />
            ))}
          </LinksList>
        </RegularNavbarWithoutScrolling>
      )}
      <ScrollingNavbar isScrolling={isScrolling}>
        <LinksList>
          <Logo half={true} />
          <Hamburger
            onClick={() => setDisplayDropdown(!displayDropdown)}
            opened={displayDropdown}
          />
          <LinksContainer displayDropdown={displayDropdown}>
            {links.map((link) => (
              <HeaderLink
                displayDropdown={displayDropdown}
                half={true}
                key={link.href}
                link={link}
              />
            ))}
          </LinksContainer>
        </LinksList>
      </ScrollingNavbar>
    </HeaderContainer>
  );
};
