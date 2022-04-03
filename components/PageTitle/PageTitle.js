import React from 'react'
import styled from 'styled-components'

import fontStyles from '../../styles/fonts/fontStyles'

const FontStyles = fontStyles[0]
const Theme = fontStyles[1]

const H1Wrapper = styled.h1`
  text-transform: uppercase;
  color: ${({theme: {colors}}) => colors.red};
  font-family: ${({theme: {fonts}}) => fonts.junicode};
  font-size: ${({theme: {fontSizes}}) => fontSizes.fourTimes};
  line-height: ${({theme: {lineHeights}}) => lineHeights.fourTimes};
  text-align: center;
`

const H2Wrapper = styled.h2`
  text-transform: uppercase;
  color: ${({theme: {colors}}) => colors.mediumRed};
  font-family: ${({theme: {fonts}}) => fonts.junicode};
  font-size: ${({theme: {fontSizes}}) => fontSizes.threeTimes};
  line-height: ${({theme: {lineHeights}}) => lineHeights.threeTimes};
  text-align: center;
`

const H3Wrapper = styled.h3`
  text-transform: uppercase;
  color: ${({theme: {colors}}) => colors.darkRed};
  font-family: ${({theme: {fonts}}) => fonts.junicode};
  font-size: ${({theme: {fontSizes}}) => fontSizes.twoTimes};
  line-height: ${({theme: {lineHeights}}) => lineHeights.twoTimes};
  text-align: center;
`

export default function PageTitle({children, header}) {
  let HeaderComponent = H1Wrapper
  if (header === 2) {
    HeaderComponent = H2Wrapper
  } else if (header === 3) {
    HeaderComponent = H3Wrapper
  }
  return (
    <Theme>
      <FontStyles junicode={true} />
      <HeaderComponent>{children}</HeaderComponent>
    </Theme>
  )
}
