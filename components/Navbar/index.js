import React from "react";

// Template:
// https://codepen.io/worsnupd/pen/VgZwOw?editors=0110

// Components
import MobileLinks from "./components/MobileLinks";
import RegularLinks from "./components/RegularLinks";

// Test data
import sampleData from "./data";

function Navbar({ links = sampleData, router = null, LinkComponent = null }) {
  const routerPush = (e, href) => {
    if (href === "#") {
      return;
    }
    e.preventDefault();
    try {
      router.push(href);
    } catch {
      // not sure, for the preview.
    }
  };

  return (
    <nav>
      {/** Not mobile navbar */}
      <RegularLinks
        LinkComponent={LinkComponent}
        links={links}
        routerPush={routerPush}
      />
      {/** Mobile navbar */}
      <MobileLinks
        LinkComponent={LinkComponent}
        links={links}
        routerPush={routerPush}
      />
    </nav>
  );
}

export default Navbar;
