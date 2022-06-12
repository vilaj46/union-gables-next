import React from "react";

import { PageTitles } from "../PageTitles";

export const Preview = ({ value }) => {
  const { bnb, center, fullScreen, header, text, margin } = value;
  return (
    <PageTitles
      bnb={bnb}
      center={center}
      fullScreen={fullScreen}
      header={header}
      margin={margin}
      text={text}
    />
  );
};
