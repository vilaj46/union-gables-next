import React from "react";
import { Container } from "@mui/material";

function Youtube() {
  const src =
    "https://www.youtube.com/watch?v=lLu-Hkdum0I&t=2s&ab_channel=UnionGablesInn";
  return (
    <Container>
      <iframe
        width="95%"
        height="315"
        src="https://www.youtube.com/embed/lLu-Hkdum0I"
        allowFullScreen=""
        frameBorder="0"
        style={{ display: "block", margin: "0 auto" }}
        title="Union Gables Tour Video"
      ></iframe>
    </Container>
  );
}

export default Youtube;
