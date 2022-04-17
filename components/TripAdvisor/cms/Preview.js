import React from "react";

import TripAdvisor from "../index";

import tripAdvisorImg from "../../../static/images/tripAdvisor.png";

function Preview({ value }) {
  const { center } = value;
  return <TripAdvisor src={tripAdvisorImg} center={center} />;
}

export default Preview;
