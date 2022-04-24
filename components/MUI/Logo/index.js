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

  @media (${device.mobileL}) {
    width: 150px;
    height: 70px;
  }
`;

function Logo({ LinkComponent = null }) {
  // For preview
  if (LinkComponent === null) {
    return (
      <Container src="/static/images/LOGO.png" alt="Union Gables Inn Logo" />
    );
  } else {
    return (
      <LinkComponent href="/">
        <Container src="/static/images/LOGO.png" alt="Union Gables Inn Logo" />
      </LinkComponent>
    );
  }
}

export default Logo;
