import React from 'react'

// Components
import RedBall from './RedBall'
import CustomLink from '../../CustomLink'

function RedLink({linkObj, includeBall}) {
  return (
    <CustomLink href={linkObj.href}>
      {linkObj.text} {includeBall && <RedBall />}
    </CustomLink>
  )
}

export default RedLink
