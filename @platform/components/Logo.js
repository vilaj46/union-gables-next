import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const Img = styled.img`
  max-height: ${(props) => (props.half ? "50px" : "90px")};
  max-width: ${(props) => (props.half ? "145px" : "220px")};
`;

const TransparentUnderline = styled.div`
  background: rgba(255, 255, 255, 0);
  height: 2px;
  width: 100%;
`;

const Underline = styled.div`
  background: ${(props) => props.theme.colors.white};
  height: 2px;
  width: 100%;
`;

export const Logo = ({ half }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <Link href="/">
      <a
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <Img
          alt="Union Gables Inn Logo"
          src="/static/images/LOGO.png"
          half={half}
        />
        {hovering && <Underline />}
        {!hovering && <TransparentUnderline />}
      </a>
    </Link>
  );
};
