function createLinkObjects(arr = []) {
  return arr.map((l) => {
    return {text: l.text, href: l.url}
  })
}

export default createLinkObjects
