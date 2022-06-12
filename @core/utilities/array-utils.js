export const splitIntoColumns = (numCol, links) => {
    const length = Math.ceil(links.length / numCol);
    const splitLinks = [];
    let start = 0;
    let finish = length;
    Array(numCol)
      .fill(numCol)
      .forEach(() => {
        splitLinks.push([...links.slice(start, finish)]);
        start = start + length;
        finish = finish + length;
      });
  
    return splitLinks;
  };