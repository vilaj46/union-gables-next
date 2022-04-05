import React from "react";
import Link from "next/link";

import DarkenSlider from "../../components/DarkenSlider";

import sampleData from "../../components/DarkenSlider/data";
function DarkenSlidersPage() {
  const withComponent = sampleData.map((d) => {
    return {
      ...d,
      Component: Link,
    };
  });
  return (
    <div>
      <DarkenSlider list={withComponent} />
    </div>
  );
}

export default DarkenSlidersPage;
