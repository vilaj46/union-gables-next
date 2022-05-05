import React from "react";
import { Container } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

import PageTitle from "../../PageTitle/PageTitle";
import SocialIcon from "./components/SocialIcon";
import IconContainer from "./components/IconContainer";

const googleMap =
  "https://www.google.com/maps/place/Union+Gables+Inn/@43.0774944,-73.7818311,17z/data=!3m1!4b1!4m8!3m7!1s0x89de39db198dc42f:0x6cae1a6c359b6f02!5m2!4m1!1i2!8m2!3d43.0776007!4d-73.7796035";

function Footer({ data }) {
  const {
    email,
    facebook,
    instagram,
    location,
    pinterest,
    telephone,
    tripadvisor,
  } = data;
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
          label={location}
          Icon={LocationOnIcon}
          href={googleMap}
        />
        <IconContainer
          label={telephone}
          Icon={LocalPhoneIcon}
          href={`tel:+${telephone}`}
        />
        <IconContainer
          label={email}
          Icon={EmailIcon}
          href={`mailto:${email}`}
        />
      </div>

      <div style={{ textAlign: "center" }}>
        <SocialIcon Icon={FacebookIcon} href={facebook} />
        <SocialIcon Icon={InstagramIcon} href={instagram} />
        <SocialIcon Icon={PinterestIcon} href={pinterest} />
        <SocialIcon Icon={TripOriginIcon} href={tripadvisor} />
      </div>
    </Container>
  );
}

export default Footer;
