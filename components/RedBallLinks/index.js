import React from "react";
import { Container } from "@mui/material";
import styled from "styled-components";

import divideLinksEvenly from "./utilities/divideLinksEvenly";

// Components
import RedLinkColumn from "./components/RedLinkColumn";

// Utilities
import getRandomKey from "../../clientUtils/getRandomKey";

import sampleData from "./data";

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 3.5rem;
  padding: 0;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

function RedBallLinks({ links = sampleData, randomKey = undefined }) {
  const splitLinks = divideLinksEvenly(links);
  if (links.length > 0) {
    return (
      <Container>
        <LinksContainer>
          {splitLinks.map((split) => {
            return (
              <RedLinkColumn links={split} key={randomKey || getRandomKey()} />
            );
          })}
        </LinksContainer>
      </Container>
    );
  } else {
    return <Container>Red Balls loading...</Container>;
  }
}

export default RedBallLinks;
