import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  overflow: hidden;
  // background-size: 'cover';
`

const Img = styled.img`
  // display: block;
  width: 100%;
  height: '100%';
  // objectfit: 'contain';
  // maxheight: '450px';
  zoom: 50%;
`

function ThreeReasonsBackground({src = '', alt = 'Union Gables Three Reasons'}) {
  return (
    <Container>
      <Img src={src} alt={alt} />
    </Container>
  )
}

export default ThreeReasonsBackground
