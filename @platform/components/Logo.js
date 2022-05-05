import Link from "next/link";
import styled from "styled-components";

const Img = styled.img`
  max-height: 90px;
  max-width: 220px;
`;

export const Logo = () => (
  <Link href="/">
    <a>
      <Img src="/static/images/LOGO.png" alt="Union Gables Inn Logo" />
    </a>
  </Link>
);
