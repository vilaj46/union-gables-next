import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";

// Components
import Item from "./Item";
import Menu from "./Menu";
import Logo from "./Logo";

const MobileNavbarContainer = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  color: #ffffff;
  position: fixed;
  z-index: 50;
  background-color: #333;
  @media (min-width: 641px) {
    display: none;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function MobileNavbar({ links, routerPush, LinkComponent = null }) {
  const [isOpen, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setIsScrolling(false), 500);

    return () => {
      resetTimeout();
    };
  }, [isScrolling]);

  const handleScroll = () => {
    if (isScrolling === false) {
      setIsScrolling(true);
    }
  };

  try {
    window.addEventListener("scroll", handleScroll);
  } catch {
    // do nothing
  }

  return (
    isScrolling === false && (
      <MobileNavbarContainer>
        <Item routerPush={routerPush} dropdown={true}>
          <Hamburger isOpen={isOpen} setOpen={setOpen} />
          <Logo mobile={true} LinkComponent={LinkComponent} />
        </Item>
        {isOpen && (
          <LinksContainer>
            {links.map((link, idx) => {
              return (
                <Menu key={link.href + idx}>
                  <Item
                    href={link.href}
                    routerPush={routerPush}
                    left={true}
                    mobile={true}
                  >
                    {link.label}
                  </Item>
                </Menu>
              );
            })}
          </LinksContainer>
        )}
      </MobileNavbarContainer>
    )
  );
}

export default MobileNavbar;
