import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 2px solid #ffffff;
  border-radius: 100%;
  height: 45px;
  width: 45px;
  margin: auto;
  text-align: center;
  z-index: 1;

  &:hover {
    cursor: pointer;
    background-color: rgba(42, 5, 17, 0.5);
  }
`
const ActivatedContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 100%;
  height: 45px;
  width: 45px;
  z-index: 1;
  margin: auto;
  background-color: #2a0511;

  &:hover {
    cursor: pointer;
    background-color: rgba(42, 5, 17, 0.5);
  }
`

const Button = styled.button`
  color: #ffffff;
  text-align: center;
  margin: auto;
  font-size: 24px;
  outline: none;
  border: none;
  z-index: 200;
  background: none;
  width: 100%;
  height: 100%;
  border-radius: 100%;

  &:hover {
    cursor: pointer;
  }
`

const ThreeReasonsNumber = ({text = 'Button', active = 1, click}) => {
  const onClick = () => {
    click(text)
  }

  if (active === text) {
    return (
      <ActivatedContainer>
        <Button type="button" onClick={onClick}>
          {text}
        </Button>
      </ActivatedContainer>
    )
  } else {
    return (
      <Container>
        <Button type="button" onClick={onClick}>
          {text}
        </Button>
      </Container>
    )
  }
}

export default ThreeReasonsNumber
