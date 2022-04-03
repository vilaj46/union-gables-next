import React from 'react'
import styled from 'styled-components'

import device from '../../styles/device'

const Container = styled.section`
  width: 83.333333%;
  margin: 0 auto;

  @media (${device.laptopL}) {
    width: 50%;
  }
`

function MainContainer({children}) {
  return <Container>{children}</Container>
}

export default MainContainer
