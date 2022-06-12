import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import device from "../../../styles/device";

const Anchor = styled.a`
  align-items: center;
  background: ${(props) =>
    props.openDisplayDropdown ? "rgba(255, 255, 255, 0.3)" : ""};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  font-size: ${(props) => (props.half ? ".8rem" : "1rem")};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  margin-top: ${(props) => (props.half ? "24px" : "36px")};
  padding: ${(props) => (props.half ? "8px 7px" : "16px 14px")};
  text-align: ${(props) => (props.half ? "center" : "left")};
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.red};
    cursor: pointer;
  }
`;

const BookNow = styled.a`
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  display: block;
  font-size: ${(props) => (props.half ? ".8rem" : "1rem")};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  margin-top: ${(props) => (props.half ? "24px" : "36px")};
  padding: ${(props) => (props.half ? "8px 7px" : "16px 14px")};
  text-align: ${(props) => (props.half ? "left" : "center")};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkRed};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }
`;

const Caret = styled.div`
  margin-left: 8px;
  transform: rotate(180deg);
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

const Dropdown = styled.div`
  background: rgba(255, 255, 255, 0.3);
  display: ${(props) => {
    if (props.displayDropdown) {
      return "none";
    }
    return "flex";
  }};
  flex-direction: column;
  text-transform: uppercase;
`;

const DropdownAnchor = styled.a`
  color: ${(props) => props.theme.colors.white};
  display: flex;
  font-size: ${(props) => (props.half ? ".8rem" : "1rem")};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  padding: ${(props) => (props.half ? "8px 7px" : "16px 14px")};
  text-align: left;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.red};
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

export const HeaderLink = ({ displayDropdown, half, link }) => {
  const [openDisplayDropdown, setOpenDisplayDropdown] = useState(false);

  const isBookNow = link.href.includes("resnexus") ? true : false;

  return (
    <Wrapper
      onMouseEnter={() => setOpenDisplayDropdown(true)}
      onMouseLeave={() => setOpenDisplayDropdown(false)}
    >
      {!isBookNow && (
        <Link href={link.href}>
          <Anchor half={half} openDisplayDropdown={openDisplayDropdown}>
            {link.label} {link.dropdown.length > 0 && <Caret>&#94;</Caret>}
          </Anchor>
        </Link>
      )}
      {isBookNow && (
        <BookNow half={half} href={link.href} target="_blank">
          {link.label}
        </BookNow>
      )}
      {openDisplayDropdown && link.dropdown && link.dropdown.length > 0 && (
        <Dropdown displayDropdown={displayDropdown}>
          {link.dropdown.map((dropLink) => (
            <Link href={dropLink.href} key={dropLink.href}>
              <DropdownAnchor half={half}>{dropLink.label}</DropdownAnchor>
            </Link>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};
