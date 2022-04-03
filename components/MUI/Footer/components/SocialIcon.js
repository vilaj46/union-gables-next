import React, { useState } from "react";

function SocialIcon({ Icon }) {
  const [hovering, setHovering] = useState(false);
  return (
    <Icon
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      color={hovering ? "secondary" : "#333"}
      sx={{ cursor: "pointer" }}
      fontSize="large"
    />
  );
}

export default SocialIcon;
