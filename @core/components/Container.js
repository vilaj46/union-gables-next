import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Container = ({ children }) => <Div>{children}</Div>;
