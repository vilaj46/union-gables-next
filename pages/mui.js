import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// Components
import CustomCarousel from "../components/MUI/Carousel";
// import Header from "../components/MUI/Header";

function MUI() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <CustomCarousel />
      {/* <Header /> */}
    </div>
  );
}

export default MUI;
