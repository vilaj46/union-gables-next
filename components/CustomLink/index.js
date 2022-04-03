import React from 'react'
import styled from 'styled-components'

import fontStyles from '../../styles/fonts/fontStyles'

const FontStyles = fontStyles[0]
const Theme = fontStyles[1]

const Container = styled.a`
  text-decoration: underline;
  // !important to override sanity styling blue.
  color: ${({theme: {colors}}) => colors.darkRed} !important;
  font-family: ${({theme: {fonts}}) => fonts.droid};
  font-size: ${({theme: {fontSizes}}) => fontSizes.base};
  line-height: ${({theme: {lineHeights}}) => lineHeights.base};
  font-weight: ${({theme: {fontWeights}}) => fontWeights.semiBold};

  &:hover {
    cursor: pointer;
    color: ${({theme: {colors}}) => colors.red} !important;
  }
`

function CustomLink({children, href = '#', Component = undefined}) {
  if (Component === undefined) {
    return (
      <Theme>
        <FontStyles />
        <Container href={href} target="_blank" rel="noreferrer noopener">
          {children}
        </Container>
      </Theme>
    )
  } else {
    return (
      <Theme>
        <FontStyles />
        <Component href={href}>
          <Container>{children}</Container>
        </Component>
      </Theme>
    )
  }
}

export default CustomLink
