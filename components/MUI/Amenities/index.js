import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";

import sampleData from "./data";

import device from "../../../styles/device";

import fontStyles from "../../../styles/fonts/fontStyles";

const FontStyles = fontStyles[0];
const Theme = fontStyles[1];

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const AmenitiesItem = styled.li`
  list-style-type: none;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: ${({ theme: { colors } }) => colors.lightBlack};
  font-family: ${({ theme: { fonts } }) => fonts.droid};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
`;

const AmenitiesItemTrans = styled.li`
  opacity: 0;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;

  color: ${({ theme: { colors } }) => colors.lightBlack};
  font-family: ${({ theme: { fonts } }) => fonts.droid};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.base};

  @media ${device.tablet} {
    margin-left: ${(props) => props.first ?? "50px"};
  }
`;

function Amenities({ amenities = sampleData }) {
  const splitBy = Math.floor(amenities.length / 2);
  const row1 = amenities.slice(0, splitBy);
  const row2 = amenities.slice(splitBy, amenities.length);
  return (
    <Theme>
      <FontStyles />
      <Container>
        <Container>
          <Flex>
            <List first={true}>
              <AmenitiesItem>Amenities</AmenitiesItem>
              {row1.map((amen) => (
                <li key={amen}>{amen}</li>
              ))}
            </List>
            <List>
              <AmenitiesItemTrans>---</AmenitiesItemTrans>
              {row2.map((amen) => (
                <li key={amen}>{amen}</li>
              ))}
            </List>
          </Flex>
        </Container>
      </Container>
    </Theme>
  );
}

export default Amenities;
