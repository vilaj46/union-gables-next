import React from "react";
import styled from "styled-components";

// https://codepen.io/Infografika/pen/WNXYxwM

const Wrap = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
`;

const Burger = styled.div`
  width: 50px;
  height: 36px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
`;

const LineTop = styled.span`
  display: block;
  height: 3px;
  width: 100%;
  background-color: #ffffff;
  transition: all ease 0.5s;
  transform-origin: center center;

  transform: ${(props) =>
    props.active ? "translate(0, 18px) rotate(45deg)" : "center center"};
`;

const LineCenter = styled.span`
  display: block;
  height: 3px;
  width: 100%;
  background-color: #ffffff;
  transition: all ease 0.5s;
  margin: auto 0;

  opacity: ${(props) => (props.active ? "0" : "1")};
`;

const LineBottom = styled.span`
  display: block;
  height: 3px;
  width: 100%;
  background-color: #ffffff;
  transition: all ease 0.5s;
  transform-origin: center center;
  transform: ${(props) =>
    props.active ? "translate(0, -15px) rotate(-45deg)" : "center center"};
`;

function Hamburger({ setOpen, isOpen }) {
  return (
    <Wrap>
      <Burger onClick={() => setOpen(!isOpen)}>
        <LineTop active={isOpen}></LineTop>
        <LineCenter active={isOpen}></LineCenter>
        <LineBottom active={isOpen}></LineBottom>
      </Burger>
    </Wrap>
  );
}

export default Hamburger;
