import React from "react";
import styled from "styled-components";

import { Container } from "../../@core/components/Container";
const Wrapper = styled.span`
  border-top: 1px solid #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
`;

function HR() {
  return (
    <Container>
      <Wrapper />
    </Container>
  );
}

export default HR;
