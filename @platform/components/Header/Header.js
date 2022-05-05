import { useState, useEffect } from "react";
import styled from "styled-components";

import { CustomLink } from "./CustomLink";
import { Logo } from "../Logo";

import device from "../../../styles/device";

const LinksList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

const ScrollingNavbar = styled.nav`
  background: ${(props) => props.theme.colors.mediumRed};
  color: #ffffff;
  display: ${(props) => (props.isScrolling ? "block" : "none")};
  position: fixed;
  top: 0;
  width: 100%;
`;

const ScrollingNavbarTwo = styled.nav`
  background: ${(props) => props.theme.colors.mediumRed};
  color: #ffffff;
  display: block;
  position: fixed;
  top: 0;
  width: 100%;

  @media ${device.cs} {
    display: none;
  }
`;

const TopNavbar = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  display: none;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 0);
  width: 80%;

  @media ${device.cs} {
    display: block;
  }
`;

const TransparentBackground = styled.div`
  border: 1px solid transparent;
`;

export const Header = ({ links }) => {
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
    <>
      {!isScrolling && (
        <TopNavbar>
          <TransparentBackground>
            <LinksList>
              <Logo />
              {links.map((link) => (
                <CustomLink key={link.href} link={link} />
              ))}
            </LinksList>
          </TransparentBackground>
        </TopNavbar>
      )}
      {/** Not when scrolling just same style. */}
      <ScrollingNavbarTwo isScrolling={isScrolling}>
        <LinksList>
          <Logo />
          {links.map((link) => (
            <CustomLink key={link.href} link={link} />
          ))}
        </LinksList>
      </ScrollingNavbarTwo>
      {/** Only when scrolling. */}
      <ScrollingNavbar isScrolling={isScrolling}>
        <LinksList>
          <Logo />
          {links.map((link) => (
            <CustomLink key={link.href} link={link} />
          ))}
        </LinksList>
      </ScrollingNavbar>
    </>
  );
};
