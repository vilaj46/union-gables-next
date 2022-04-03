import * as React from "react";
import styled from "styled-components";

import api from "../../api/homepageAPI";

// Sub Components
import ThreeReasonsNumber from "./ThreeReasonsNumber";
import ThreeReasonsBackground from "./ThreeReasonsBackground";

const Container = styled.div`
  position: relative;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 731px) {
    min-height: 0;
    height: auto;
  }
`;

const H3Container = styled.h3`
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  letter-spacing: 1px;
  font-size: 1.4rem;

  @media screen and (max-width: 731px) {
    font-weight: 200;
    padding-top: 50px;
    padding-bottom: 25px;
    margin: 0;
  }
`;

const ParagraphContainer = styled.p`
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  width: 95%;
  margin: auto;
  height: 80px;
  letter-spacing: 1px;
  font-size: 1.4rem;

  @media screen and (max-width: 731px) {
    font-weight: 200;
    height: auto;
    padding: 0;
    min-height: 60px;
    padding-bottom: 25px;
  }

  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;

const NumbersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  position: absolute;
  z-index: 2;

  @media screen and (max-width: 731px) {
    padding-bottom: 50px;
  }
`;

const CenterText = styled.div`
  height: 50%;
  text-align: center;
  z-index: 1;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Brightness = styled.div`
  filter: brightness(50%);
`;

const ThreeReasons = ({ images }) => {
  const [reason, setReason] = React.useState("food");
  const reasonObjects = createReasons(images);

  // Helper functions because we were failing whend deploying.
  const setAlt = (reason) => {
    if (reason && Object.keys(reason).length > 0) {
      return reason.alt;
    }
  };

  const setImg = (reason) => {
    if (reason && Object.keys(reason).length > 0) {
      return reason.img;
    } else {
      return {};
    }
  };

  const setDescription = (reason) => {
    if (reason && Object.keys(reason).length > 0) {
      return reason.description;
    }
  };

  return (
    <Container>
      <Brightness>
        <ThreeReasonsBackground
          alt={setAlt(reasonObjects[reason])}
          data={setImg(reasonObjects[reason])}
        />
      </Brightness>
      <CenterText>
        <H3Container>{api.threeReasonsTitle}</H3Container>
        <ParagraphContainer>
          {setDescription(reasonObjects[reason])}
        </ParagraphContainer>
      </CenterText>

      <NumbersContainer>
        <ThreeReasonsNumber
          text="1"
          activated={reason === "food" ? true : false}
          setReason={() => setReason("food")}
          num={0}
        />
        <ThreeReasonsNumber
          text="2"
          num={1}
          activated={reason === "room" ? true : false}
          setReason={() => setReason("room")}
        />
        <ThreeReasonsNumber
          text="3"
          num={2}
          activated={reason === "racetrack" ? true : false}
          setReason={() => setReason("racetrack")}
        />
      </NumbersContainer>
    </Container>
  );
};

const createReasons = (images) => {
  let obj = {};

  images.forEach((img) => {
    if (img.node.base === "room.jpg") {
      obj.room = {
        description:
          "Discover romantic and historic rooms with antique furnishings natural gas fireplaces, and luxury linens.",
        alt: "Saratoga Springs Union Gables Historic Rooms",
        img,
      };
    } else if (img.node.base === "food.jpg") {
      obj.food = {
        description:
          "Easily walk to over 125 restaurants, music venues, bars, museums, galleries, and downtown shopping.",
        alt: "Saratoga Springs Union Gables Nearby Restaurants",
        img,
      };
    } else {
      obj.racetrack = {
        description:
          "Stay one and a half blocks from the oldest racetrack in the country.",
        alt: "Saratoga Springs Racetrack",
        img,
      };
    }
  });
  return obj;
};

export default ThreeReasons;
