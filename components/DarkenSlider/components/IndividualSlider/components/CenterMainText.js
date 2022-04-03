import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  top: 50%;
  z-index: 20;
  position: absolute;
  transition-property: all;
  transition-duration: 500ms;
  transform: translateY(-50%);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`

const OpacBackground = styled.div`
  padding: 0.5rem;
  position: relative;
  background-color: rgba(62, 14, 30, 0.55);
`

const TextContainer = styled.span`
  z-index: 30;
  color: #ffffff;
  text-transform: uppercase;
  font-family: ${({theme: {fonts}}) => fonts.droid};
`

export default function CenterMainText({children, id}) {
  const enter = (e) => {
    e.preventDefault()
  }

  return (
    <Container id={id} onMouseEnter={enter}>
      <OpacBackground>
        <TextContainer>{children}</TextContainer>
      </OpacBackground>
    </Container>
  )
}
