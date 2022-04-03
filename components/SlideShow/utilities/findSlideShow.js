function findSlideShow(body) {
  let found = null;
  for (let i = 0; i < body.length; i++) {
    const currentElement = body[i];
    if (currentElement._type === "slideShow") {
      found = currentElement;
      break;
    }
  }

  return found;
}

export default findSlideShow;
