import React from "react";
import styled from "styled-components";

import divideLinksEvenly from "./utilities/divideLinksEvenly";

// Components
import RedLinkColumn from "./components/RedLinkColumn";

// Utilities
import getRandomKey from "../../clientUtils/getRandomKey";

import sampleData from "./data";

const Container = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 3.5rem;
`;

function RedBallLinks({ links = sampleData, randomKey = undefined }) {
  const splitLinks = divideLinksEvenly(links);
  if (links.length > 0) {
    return (
      <Container>
        {splitLinks.map((split) => {
          return (
            <RedLinkColumn links={split} key={randomKey || getRandomKey()} />
          );
        })}
      </Container>
    );
  } else {
    return <Container>Red Balls loading...</Container>;
  }
}

export default RedBallLinks;
