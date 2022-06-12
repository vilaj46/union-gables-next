import Link from "next/link";
import styled from "styled-components";

const Anchor = styled.a`
  color: ${(props) => props.theme.colors.white};
  display: block;
  height: 100%;
  // padding: 12px 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const BookNow = styled.a`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.red};
  display: block;
  // padding: 14px 0;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    color: ${(props) => props.theme.colors.redBall};
    cursor: pointer;
  }
`;

export const FooterLink = ({ link }) => {
  const isBookNow = link.href.includes("resnexus") ? true : false;

  return (
    // <li style={{ width: "100%" }}>
    <li>
      {!isBookNow && (
        <Link href={link.href}>
          <Anchor>{link.label}</Anchor>
        </Link>
      )}
      {isBookNow && <BookNow href={link.href}>{link.label}</BookNow>}
    </li>
  );
};
