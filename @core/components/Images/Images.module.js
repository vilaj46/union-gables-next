import styled from "styled-components";

export const DoubleImgsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.margin}px;
  margin-top: ${(props) => props.margin}px;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

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
