import React from 'react'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'

// Components
import DarkenSlider from '../components/DarkenSlider'

// Utilities
import createDarkenSliderList from '../components/DarkenSlider/utilities/createDarkenSliderList'

const DarkenSliderRenderer = (props) => {
  const {_type} = props.node
  if (_type === 'darkenSlider') {
    const {darken_slider} = props.node
    const list = createDarkenSliderList(darken_slider, Link)
    return <DarkenSlider list={list} />
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props)
}

export default DarkenSliderRenderer
