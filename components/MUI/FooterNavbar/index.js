import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HouseIcon from "@mui/icons-material/House";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import styled from "styled-components";

import SampleLink from "./cms/SampleLink";

import device from "../../../styles/device";

const FooterContainer = styled.div`
  display: block;
  @media ${device.tablet} {
    display: none;
  }
`;

// Currently not server side rendered
// because hydration and scroll event
function FooterNavbar({ LinkComponent = SampleLink }) {
  const TTL = 500;
  const [timeout, setTimer] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  function onScroll() {
    setIsScrolling(true);

    clearTimeout(timeout);
    const timer = setTimeout(() => {
      setIsScrolling(false);
    }, TTL);
    setTimer(timer);
  }

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", onScroll);
    }

    if (!loaded) {
      setTimeout(() => {
        setLoaded(true);
      }, TTL);
    }
  }, []);
  return (
    !isScrolling &&
    loaded && (
      <FooterContainer>
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0, backgroundColor: "#AA4465" }}
        >
          <Container>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <IconButton>
                <LinkComponent href="/">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#ffffff",
                      fontSize: "1rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ border: "1px solid transparent" }}>
                      <HouseIcon />
                    </div>
                    Home
                  </a>
                </LinkComponent>
              </IconButton>
              <IconButton>
                <LinkComponent href="/">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#ffffff",
                      fontSize: "1rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ border: "1px solid transparent" }}>
                      <LocalPhoneIcon />
                    </div>
                    Contact
                  </a>
                </LinkComponent>
              </IconButton>
              <IconButton>
                <LinkComponent href="/">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#ffffff",
                      fontSize: "1rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ border: "1px solid transparent" }}>
                      <LocationOnIcon />
                    </div>
                    Location
                  </a>
                </LinkComponent>
              </IconButton>
              <IconButton>
                <LinkComponent href="/">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#ffffff",
                      fontSize: "1rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ border: "1px solid transparent" }}>
                      <BedIcon />
                    </div>
                    Rooms
                  </a>
                </LinkComponent>
              </IconButton>
              <IconButton>
                <LinkComponent href="/">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#ffffff",
                      fontSize: "1rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ border: "1px solid transparent" }}>
                      <CalendarMonthIcon />
                    </div>
                    Book Now
                  </a>
                </LinkComponent>
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </FooterContainer>
    )
  );
}

export default FooterNavbar;
