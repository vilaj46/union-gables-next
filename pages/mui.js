import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// Components
// import Gallery from "../components/Gallery";
// import CustomCarousel from "../components/MUI/Carousel";
// import Header from "../components/MUI/Header";

import { Images } from "../@core/components/Images/Images";

function MUI() {
  const imgOne = "/static/images/doubleImages/doubleOne.jpg";
  const imgTwo = "/static/images/doubleImages/doubleTwo.jpg";
  const images = [
    {
      src: imgOne,
      alt: "Image One Alt",
    },
    {
      src: imgTwo,
      alt: "Image Two Alt",
    },
  ];
  return (
    <div style={{ overflowX: "hidden" }}>
      <Images src={imgOne} />
      {/* <Gallery /> */}
      {/* <Header /> */}
    </div>
  );
}

export default MUI;
