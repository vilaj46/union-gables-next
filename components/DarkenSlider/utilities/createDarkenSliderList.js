import urlFor from '../../../clientUtils/urlFor'

function createDarkenSliderList(list = [], LinkNext = undefined) {
  return list.map((item) => {
    const {alt, href, buttonText, mainText, slideText, Component, long} = item
    const image = urlFor(item)
    const {src} = image
    return {
      Component: LinkNext ? LinkNext : Component,
      src,
      alt,
      href,
      buttonText,
      mainText,
      slideText,
      long,
    }
  })
}

export default createDarkenSliderList
