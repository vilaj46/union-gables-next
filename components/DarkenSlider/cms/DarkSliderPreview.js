import React from 'react'

import DarkenSlider from '../index'
import createDarkenSliderList from '../utilities/createDarkenSliderList'

function DarkSliderPreview(props) {
  const {value} = props
  const {slider} = value
  try {
    const previewList = createDarkenSliderList(slider)
    const {long} = previewList[0]
    return <DarkenSlider list={previewList} long={long} />
  } catch {
    return <DarkenSlider list={[]} />
  }
}

export default DarkSliderPreview
