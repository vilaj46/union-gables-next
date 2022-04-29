import styled from "styled-components";

import device from "../../styles/device";

export const DoubleImgsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

// @media only screen and (${device.laptop}) {

export const DoubleImg = styled.img`
  margin-bottom: 25px;

  @media only screen and (min-width: 1024px) {
    width: 49%;
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
