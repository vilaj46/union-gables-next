import React, { useState, Children } from "react";
import styled from "styled-components";

const Container = styled.ul`
  margin: 0;
  z-index: 0;
  padding: 0;
  // width: 200px;
  position: relative;
  color: #ffffff;
`;

const Open = styled.div`
  top: 100%;
  z-index: 0;
  // width: 100%;
  position: absolute;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;

function Menu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [head, ...tail] = Children.toArray(children);

  return (
    <Container
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {head}
      {isOpen && <Open>{tail}</Open>}
    </Container>
  );
}

export default Menu;
