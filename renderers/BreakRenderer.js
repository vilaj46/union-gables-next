import BlockContent from '@sanity/block-content-to-react'

import HR from '../components/HR'

const BreakRenderer = (props) => {
  // Fall back to default handling
  const {_type = 'break'} = props.node

  if (_type === 'break') {
    return <HR />
  }
  return BlockContent.defaultSerializers.types.block(props)
}

export default BreakRenderer
