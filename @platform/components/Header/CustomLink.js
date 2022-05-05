import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const Anchor = styled.a`
  color: ${(props) => props.theme.colors.white};
  display: block;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  padding: 16px 14px;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.red};
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

const Width = styled.div`
  width: 100%;
`;

export const CustomLink = ({ link }) => {
  const [openDisplayDropdown, setOpenDisplayDropdown] = useState(false);
  return (
    // <Theme>
    <Width
      onMouseEnter={() => setOpenDisplayDropdown(true)}
      onMouseLeave={() => setOpenDisplayDropdown(false)}
    >
      <Link href={link.href}>
        <Anchor>{link.label}</Anchor>
      </Link>

      {openDisplayDropdown && link.dropdown && link.dropdown.length > 0 && (
        <Dropdown>
          {link.dropdown.map((dropLink) => (
            <Link href={dropLink.href} key={dropLink.href}>
              <Anchor>{dropLink.label}</Anchor>
            </Link>
          ))}
        </Dropdown>
      )}
    </Width>
    // </Theme>
  );
};
