function divideLinksEvenly(links) {
  if (links.length > 0) {
    const linksLength = links.length
    const halfLength = Math.ceil(linksLength / 2)
    const firstHalf = links.slice(0, halfLength)
    const secondHalf = links.slice(halfLength, linksLength)
    return [firstHalf, secondHalf]
  } else {
    return []
  }
}
export default divideLinksEvenly
