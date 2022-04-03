import React from "react";
import styled from "styled-components";

// https://api.mapbox.com/directions/v5/mapbox/driving-traffic/-73.7796%2C43.0775%3B-73.7796%2C43.0775?alternatives=false&continue_straight=false&geometries=geojson&overview=simplified&steps=false&access_token=pk.eyJ1IjoidmlsYWo0NiIsImEiOiJjbDFqbjZkcXUwaDVyM2NwNzUyMnc0YXlnIn0.gN8BiBMiVYR7GAhRV-Ksvw
import PageTitle from "../PageTitle/PageTitle";

const ImageContainer = styled.div`
  text-align: center;
`;

function Map() {
  return (
    <ImageContainer>
      <PageTitle header={3}>Where we are</PageTitle>
      <img
        src="/static/images/mapbox_map.png"
        alt="Union Gables Inn Saratoga Springs map"
      />
    </ImageContainer>
  );
}

export default Map;
