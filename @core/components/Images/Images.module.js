import styled from "styled-components";

import device from "../../styles/device";

export const DoubleImgsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (${device.laptop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DoubleImg = styled.img`
  margin-bottom: 25px;

  @media (${device.laptop}) {
    width: 49%;
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
