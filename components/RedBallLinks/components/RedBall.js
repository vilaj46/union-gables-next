import React from 'react'
import styled from 'styled-components'

import fontStyles from '../../../styles/fonts/fontStyles'

// const FontStyles = fontStyles[0]
const Theme = fontStyles[1]

const Container = styled.div`
  background-color: ${({theme: {colors}}) => colors.redBall};
  width: 12px;
  height: 12px;
  border-radius: 100%;
  margin: 0.75rem auto;
`

function RedBall() {
  return (
    <Theme>
      <Container />
    </Theme>
  )
}

export default RedBall
