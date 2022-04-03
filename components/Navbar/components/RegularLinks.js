import React from "react";
import styled from "styled-components";

// Components
import Logo from "./Logo";
import Menu from "./Menu";
import Item from "./Item";

const NavbarContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  position: absolute;
  flex-direction: column;
  display: none;

  align-items: center;

  @media (min-width: 641px) {
    display: flex;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  //   margin-top: 25px;
`;

function RegularLinks({ links, routerPush, LinkComponent = null }) {
  return (
    <NavbarContainer>
      <Logo LinkComponent={LinkComponent} />
      <LinksContainer>
        {links.map((link, idx) => {
          const { dropdown } = link;
          return (
            <Menu key={link.href + idx}>
              <Item routerPush={routerPush} href={link.href}>
                {link.label}
              </Item>
              {dropdown.map((drop) => {
                return (
                  <Menu key={drop.href + idx}>
                    <Item routerPush={routerPush} href={drop.href}>
                      {drop.label}
                    </Item>
                  </Menu>
                );
              })}
            </Menu>
          );
        })}
      </LinksContainer>
    </NavbarContainer>
  );
}

export default RegularLinks;
