import React from "react";
import Container from "@mui/material/Container";

import { H1, H2, H3 } from "./PageTitles.module.js";
import GlobalStyle from "../../styles/theme.default.js";

export const PageTitles = ({
  text = "",
  bnb = "Union Gables",
  header = 1,
  center = true,
}) => {
  const { Theme, Fonts } = GlobalStyle;

  let PageTitle = H1;

  // Checks whether or not we are Union Gables.
  const unionGables = bnb.toLowerCase() === "union gables";

  if (header === 2) {
    PageTitle = H2;
  } else if (header === 3) {
    PageTitle = H3;
  }

  return (
    <Container maxWidth="md">
      <Theme>
        <Fonts />
        <PageTitle center={center} unionGables={unionGables}>
          {text}
        </PageTitle>
      </Theme>
    </Container>
  );
};
