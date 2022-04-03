import React from "react";
import styled from "styled-components";

import device from "../../../styles/device";

const Container = styled.img`
  display: block;
  width: 125px;
  height: 50px;
  margin: auto;

  &:hover {
    cursor: pointer;
  }
`;

const Anchor = styled.a`
  // @media ${device.tablet} {
  //   display: none;
  // }
`;

function Logo({ LinkComponent = null }) {
  // For preview
  if (LinkComponent === null) {
    return (
      // <Anchor>
      <Container src="/static/images/LOGO.png" alt="Union Gables Inn Logo" />
      // </Anchor>
    );
  } else {
    return (
      <LinkComponent href="/">
        {/* <Anchor> */}
        <Container src="/static/images/LOGO.png" alt="Union Gables Inn Logo" />
        {/* </Anchor> */}
      </LinkComponent>
    );
  }
}

export default Logo;
