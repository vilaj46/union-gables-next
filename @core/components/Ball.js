import styled from "styled-components";

export const Ball = styled.div`
  background-color: ${({ theme: { colors } }) => colors.redBall};
  width: 12px;
  height: 12px;
  border-radius: 100%;
  margin: 0.75rem auto;
`;
