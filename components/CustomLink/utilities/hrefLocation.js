function hrefLocation(href) {
  const trimmed = href.trim()
  if (trimmed[0] === '/') {
    return 'domestic'
  } else {
    return 'foreign'
  }
}

export default hrefLocation
