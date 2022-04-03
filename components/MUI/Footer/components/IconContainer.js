import React, { useState } from "react";
import styled from "styled-components";

const Center = styled.a`
  text-align: center;
  display: block;
  color: #333;
  text-decoration: none;
`;

// https://www.google.com/maps/place/Union+Gables+Inn/@43.0774944,-73.7818311,17z/data=!3m1!4b1!4m8!3m7!1s0x89de39db198dc42f:0x6cae1a6c359b6f02!5m2!4m1!1i2!8m2!3d43.0776007!4d-73.7796035

function IconContainer({ label, Icon, href = "" }) {
  const [hovering, setHovering] = useState(false);
  return (
    <div style={{ paddingBottom: "25px" }}>
      <Center target="_blank" rel="noopener noreferrer" href={href}>
        <div>
          <Icon
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            color={hovering ? "secondary" : "#333"}
            sx={{ cursor: "pointer" }}
            fontSize="large"
          />
        </div>

        <p style={{ margin: "0", padding: "0" }}>{label}</p>
      </Center>
    </div>
  );
}

export default IconContainer;
