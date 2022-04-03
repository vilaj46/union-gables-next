import React from "react";
import styled from "styled-components";

const Container = styled.img`
  display: block;
  width: 125px;
  height: 50px;
  display: ${(props) => (props.mobile ? "block" : "none")};
  margin: auto;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 630px) {
    display: flex;
  }
`;

function Logo({ mobile = false, LinkComponent = null }) {
  // For preview
  if (LinkComponent === null) {
    return (
      <a>
        <Container
          src="/static/images/LOGO.png"
          alt="Union Gables Inn Logo"
          mobile={mobile}
        />
      </a>
    );
  } else {
    return (
      <LinkComponent href="/">
        <Container
          src="/static/images/LOGO.png"
          alt="Union Gables Inn Logo"
          mobile={mobile}
        />
      </LinkComponent>
    );
  }
}

export default Logo;
