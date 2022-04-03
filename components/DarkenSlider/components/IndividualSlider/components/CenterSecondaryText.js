import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  z-index: 40;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  top: 50%;
  transform: translateX(1000%);
  width: 75%;
`

const TextContainer = styled.div`
  position: absolute;
  z-index: 40;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
`

const Small = styled.small`
  color: #ffffff;
  z-index: 30;
  display: block;
  padding-bottom: 1.5rem;
`

const LinkContainer = styled.a`
  width: 50%;
  display: block;
  margin: 0 auto;
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: ${({theme: {colors}}) => colors.mediumRed};
  font-family: ${({theme: {fonts}}) => fonts.droid};
  font-size: ${({theme: {fontSizes}}) => fontSizes.small};
  border: 1px solid ${({theme: {colors}}) => colors.mediumRed};
  line-height: ${({theme: {lineHeights}}) => lineHeights.small};
  font-weight: ${({theme: {fontWeights}}) => fontWeights.semiBold};

  &:hover {
    color: #ffffff;
    background-color: ${({theme: {colors}}) => colors.mediumRed};
  }
`

function CenterSecondaryText({data, id}) {
  const {slideText, buttonText, Component, href} = data
  return (
    <Container id={id}>
      <TextContainer>
        <Small>{slideText}</Small>
        <Component href={href}>
          <LinkContainer>{buttonText}</LinkContainer>
        </Component>
      </TextContainer>
    </Container>
  )
}

export default CenterSecondaryText
