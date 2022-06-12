import { useEffect, useState } from "react";
import styled from "styled-components";

import { FooterLink } from "./FooterLink";

import device from "../../../styles/device";

/**
 * Ugly thickness.
 *
 * Need icons.
 */

const FooterNav = styled.footer`
  background: ${(props) => props.theme.colors.mediumRed};
  bottom: 0;
  color: ${(props) => props.theme.colors.white};
  position: fixed;
  overflow: hidden;
  width: 100%;
  z-index: 30;

  @media ${device.cs} {
    display: none;
  }
`;

const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0 auto;
  padding 8px 0;
  width: 90%;
`;

export const Footer = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNavigation = (e) => {
    setIsScrolling(true);
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [isScrolling]);
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contact",
      href: "tel:+15185841558",
    },
    {
      label: "Location",
      href: "/location",
    },
    {
      label: "Rooms",
      href: "https://resnexus.com/resnexus/reservations/book/5888F13B-7306-4082-89C2-B6F42CC9CD92?id=2704",
    },
    {
      label: "Book Now",
      href: "https://resnexus.com/resnexus/reservations/book/5888F13B-7306-4082-89C2-B6F42CC9CD92?id=2704",
    },
  ];
  return (
    !isScrolling && (
      <FooterNav>
        <nav>
          <LinksList>
            {links.map((link) => (
              <FooterLink key={link.href + link.label} link={link} />
            ))}
          </LinksList>
        </nav>
      </FooterNav>
    )
  );
};
