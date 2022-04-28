import React, { useState } from "react";

function SocialIcon({ Icon, href }) {
  const [hovering, setHovering] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        color={hovering ? "secondary" : "#333"}
        sx={{ cursor: "pointer" }}
        fontSize="large"
      />
    </a>
  );
}

export default SocialIcon;
