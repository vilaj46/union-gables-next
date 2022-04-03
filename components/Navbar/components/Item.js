import React from "react";
import styled from "styled-components";

const Container = styled.li`
  z-index: 1;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  position: relative;
  text-align: center;
  background: rgba(53, 3, 19, 0.7);
  list-style-type: none;
  box-sizing: border-box;
  transition: background-color 0.05s ease-in-out;

  text-align: ${(props) => (props.left ? "left" : "center")};
  border-top: ${(props) =>
    props.mobile ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, 0)"};
  border-bottom: ${(props) =>
    props.mobile ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, 0)"};

  display: ${(props) => (props.dropdown ? "flex" : "block")};

  &:hover {
    color: white;
    background-color: rgba(170, 68, 101, 0.7);
  }
`;

const Booknow = styled.li`
  z-index: 1;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  position: relative;
  text-align: center;
  background: rgba(170, 68, 101, 0.7);
  list-style-type: none;
  box-sizing: border-box;
  transition: background-color 0.05s ease-in-out;

  text-align: ${(props) => (props.left ? "left" : "center")};
  border-top: 1px solid rgba(255, 255, 255, 0);
  border-bottom: 1px solid rgba(255, 255, 255, 0);

  &:hover {
    color: white;
    background-color: rgba(53, 3, 19, 1);
  }
`;

const BooknowAnchor = styled.a`
  color: #ffffff;
  text-decoration: none;
`;

function Item({
  children,
  routerPush,
  href = "#",
  left = false,
  mobile = false,
  dropdown = false,
}) {
  if (href.includes("resnexus.com")) {
    return (
      <Booknow left={left} mobile={mobile}>
        <BooknowAnchor href={href} target="_blank" rel="noreferrer noopener">
          {children}
        </BooknowAnchor>
      </Booknow>
    );
  }
  return (
    <Container
      onClick={(e) => routerPush(e, href)}
      left={left}
      mobile={mobile}
      dropdown={dropdown}
    >
      {children}
    </Container>
  );
}

export default Item;
