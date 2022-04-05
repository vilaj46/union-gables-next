import React from "react";
import styled from "styled-components";
// Components
import RedLink from "./RedLink";

// Utilities
import getRandomKey from "../../../clientUtils/getRandomKey";

const Column = styled.li`
  margin-bottom: 3.5rem;
  @media (min-width: 600px) {
    margin-bottom: 0;
  }
`;

function RedLinkColumn({ links, randomKey = undefined }) {
  return (
    <Column>
      {links.map((l, i) => {
        if (i !== links.length - 1) {
          return (
            <RedLink
              linkObj={l}
              includeBall={true}
              key={randomKey || l.text + l.href + getRandomKey()}
            />
          );
        } else {
          return (
            <RedLink
              linkObj={l}
              key={randomKey || l.text + l.href + getRandomKey()}
            />
          );
        }
      })}
    </Column>
  );
}

export default RedLinkColumn;
