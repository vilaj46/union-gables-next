import React from "react";

import { PageTitles } from "../PageTitles";

export const Preview = ({ value }) => {
  const { bnb, center, header, text } = value;
  return <PageTitles bnb={bnb} center={center} header={header} text={text} />;
};
