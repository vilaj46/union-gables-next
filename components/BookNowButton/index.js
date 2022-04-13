import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  text-transform: uppercase;
  margin: 0 auto;
  text-align: center;
  outline: none;
  border: none;
  border-radius: 0;
  color: #ffffff;
  background-color: #aa4465;
  font-size: 1rem;
  padding: 7px 14px;

  &:hover {
    background-color: #350313;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

function BookNowButton() {
  return (
    <Button type="text">
      <Anchor
        target="_blank"
        rel="noopener noreferrer"
        href="https://resnexus.com/resnexus/reservations/book/5888F13B-7306-4082-89C2-B6F42CC9CD92?id=2704"
      >
        Book Now
      </Anchor>
    </Button>
  );
}

export default BookNowButton;
