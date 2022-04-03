import React from 'react'
import styled from 'styled-components'

import device from '../../../../../styles/device'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 30;
`

export default function Darken() {
  return <Container id="darken" />
}
