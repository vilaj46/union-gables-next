import React, {useState} from 'react'
import styled from 'styled-components'

import device from '../../../../styles/device'

// Components
import Darken from './components/Darken'
import CenterSecondaryText from './components/CenterSecondaryText'
import CenterMainText from './components/CenterMainText'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  // max-width: 750px;
  height: min-content;
  overflow: hidden;
  text-align: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  width: ${(props) => (props.long ? '100%' : 'auto')};
  margin-top: ${(props) => (props.long ? '0' : '0.25rem')};
  margin-bottom: ${(props) => (props.long ? '0' : '0.25rem')};
  max-height: ${(props) => (props.long ? '250px' : '700px')};
  margin-left: ${(props) => (props.long ? '0' : '0.25rem')};
  margin-right: ${(props) => (props.long ? '0' : '0.25rem')};

  &:hover #mainText {
    transform: translateX(-1000%);
  }

  &:hover #secondaryText {
    transform: translateX(0);
    transform: translateY(-50%);
  }

  @media ${device.tablet} {
    flex-direction: row;
    padding-top: 0; // offset above padding
    padding-bottom: 0; // offset above padding
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`

const ImageContainer = styled.img`
  width: 100%;
  z-index: 0;
`

export default function IndividualSlider({data, position, long}) {
  const {mainText = 'Main Text', src = ''} = data
  const [hovering, setHovering] = useState(false)

  const mouseEnter = () => setHovering(true)
  const mouseLeave = () => setHovering(false)

  return (
    <Container position={position} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} long={long}>
      {hovering && <Darken />}
      <CenterMainText id="mainText">{mainText}</CenterMainText>
      <CenterSecondaryText data={data} id="secondaryText" />
      <ImageContainer src={src} />
    </Container>
  )
}
