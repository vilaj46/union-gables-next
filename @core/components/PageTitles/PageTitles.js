import React from "react";

import { Container } from "../Container";

import GlobalStyle from "../../styles/theme.default.js";

import { H1, H2, H3, H4, H5, H6 } from "./PageTitles.module.js";

/**
 * Add different font sizes for H4-H6.
 */

export const PageTitles = ({
  bnb = "Union Gables",
  center = true,
  fullScreen = false,
  header = 1,
  margin = 0,
  text = "",
}) => {
  const { Theme, Fonts } = GlobalStyle;

  let PageTitle = H1;

  // Checks whether or not we are Union Gables.
  const unionGables = bnb.toLowerCase() === "union gables";

  if (header === 2) {
    PageTitle = H2;
  } else if (header === 3) {
    PageTitle = H3;
  } else if (header === 4) {
    PageTitle = H4;
  } else if (header === 5) {
    PageTitle = H5;
  } else if (header === 6) {
    PageTitle = H6;
  }

  if (fullScreen) {
    return (
      <>
        <Theme>
          <Fonts />
          <PageTitle center={center} unionGables={unionGables} margin={margin}>
            {text}
          </PageTitle>
        </Theme>
      </>
    );
  } else {
    return (
      <Container>
        <Theme>
          <Fonts />
          <PageTitle center={center} unionGables={unionGables} margin={margin}>
            {text}
          </PageTitle>
        </Theme>
      </Container>
    );
  }
};
