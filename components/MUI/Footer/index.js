import React, { useState } from "react";
import { Container } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

import PageTitle from "../../PageTitle/PageTitle";
import SocialIcon from "./components/SocialIcon";
import IconContainer from "./components/IconContainer";

const googleMap =
  "https://www.google.com/maps/place/Union+Gables+Inn/@43.0774944,-73.7818311,17z/data=!3m1!4b1!4m8!3m7!1s0x89de39db198dc42f:0x6cae1a6c359b6f02!5m2!4m1!1i2!8m2!3d43.0776007!4d-73.7796035";

function Footer() {
  return (
    <Container sx={{ paddingBottom: "100px" }}>
      <PageTitle header={2}>Union Gables Inn</PageTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconContainer
          label="55 Union Ave, Saratoga Springs, NY 12866, United States"
          Icon={LocationOnIcon}
          href={googleMap}
        />
        <IconContainer
          label="518-584-1558"
          Icon={LocalPhoneIcon}
          href="tel:+5185841558"
        />
        <IconContainer
          label="stay@uniongables.com"
          Icon={EmailIcon}
          href="mailto:stay@uniongables.com"
        />
      </div>

      <div style={{ textAlign: "center" }}>
        <SocialIcon Icon={FacebookIcon} />
        <SocialIcon Icon={TwitterIcon} />
        <SocialIcon Icon={InstagramIcon} />
        <SocialIcon Icon={PinterestIcon} />
        <SocialIcon Icon={TripOriginIcon} />
      </div>
    </Container>
  );
}

export default Footer;
