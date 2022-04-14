import React from "react";

import Amenities from "../index";

function Preview(props) {
  const { value } = props;

  const { amenities } = value;

  return <Amenities amenities={amenities} />;
}

export default Preview;
