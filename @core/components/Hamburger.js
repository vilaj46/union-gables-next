import React from "react";
import styled from "styled-components";

import device from "../../styles/device";

const Line = styled.div`
  background-color: #ffffff;
  height: 5px;
  margin: 6px 0;
  margin-top: ${(props) => (props.opened ? "-5px" : "")};
  pointer-events: none;
  transform: ${(props) => (props.opened ? "rotate(45deg)" : "rotate(0)")};
  width: 35px;
`;

const LineOne = styled.div`
  background-color: #ffffff;
  height: 5px;
  margin: ${(props) => (!props.opened ? "6px 0" : "")};

  pointer-events: none;
  transform: ${(props) => (props.opened ? "rotate(-45deg)" : "rotate(0)")};
  width: 35px;
`;

const Wrapper = styled.div`
  margin-left: 8px;
  padding-top: ${(props) => (props.opened ? "12px" : "")};

  &:hover {
    cursor: pointer;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const Hamburger = ({ onClick, opened }) => {
  return (
    <Wrapper onClick={onClick} opened={opened}>
      <LineOne opened={opened} />
      {!opened && <Line />}
      <Line opened={opened} />
    </Wrapper>
  );
};
