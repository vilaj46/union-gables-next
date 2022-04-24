import React from "react";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";

// Components
import RegularNavbar from "./RegularNavbar";

// Sample Data
import sampleData from "./data";

// Sample Link
import SampleLink from "./cms/SampleLink";

function HeaderNavbar({ links = sampleData, LinkComponent = SampleLink }) {
  const router = useRouter();

  const { asPath } = router;

  return (
    <div style={{ margin: "0", padding: "0" }}>
      {/* <Container sx={{ border: "5px solid red", paddingLeft: "0" }}> */}
      <RegularNavbar
        links={links}
        LinkComponent={LinkComponent}
        asPath={asPath}
      />
      {/* </Container> */}
    </div>
  );
}

export default HeaderNavbar;
