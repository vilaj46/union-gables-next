import React from "react";
import Container from "@mui/material/Container";

// Components
import Carousel from "../Carousel";
import RegularNavbar from "./RegularNavbar";

// Sample Data
import sampleData from "./data";

// Sample Link
import SampleLink from "./cms/SampleLink";

function HeaderNavbar({ links = sampleData, LinkComponent = SampleLink }) {
  return (
    <div>
      <Container>
        <RegularNavbar links={links} LinkComponent={LinkComponent} />
      </Container>
    </div>
  );
}

export default HeaderNavbar;
