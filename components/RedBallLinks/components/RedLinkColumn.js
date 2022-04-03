import React from 'react'

// Components
import RedLink from './RedLink'

// Utilities
import getRandomKey from '../../../clientUtils/getRandomKey'

function RedLinkColumn({links, randomKey = undefined}) {
  return (
    <li>
      {links.map((l, i) => {
        if (i !== links.length - 1) {
          return (
            <RedLink
              linkObj={l}
              includeBall={true}
              key={randomKey || l.text + l.href + getRandomKey()}
            />
          )
        } else {
          return <RedLink linkObj={l} key={randomKey || l.text + l.href + getRandomKey()} />
        }
      })}
    </li>
  )
}

export default RedLinkColumn
