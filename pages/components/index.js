import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

// Components
import Map from "../../components/Map";
// import TextCarousel from "../../components/MUI/TextCarousel";
// import CustomCarousel from "../../components/MUI/Carousel";
// import Header from "../../components/MUI/Header";
// import FooterNavbar from "../../components/MUI/FooterNavbar";

function Components() {
  //   const router = useRouter();

  return (
    <div style={{ overflowX: "hidden" }}>
      <Map />
      {/* <TextCarousel title="3 Reasons to Stay with Us" /> */}
      {/* <Header LinkComponent={Link} />
      <CustomCarousel />
      <CustomCarousel />
      <FooterNavbar LinkComponent={Link} /> */}
    </div>
  );
}

export default Components;
