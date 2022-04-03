import urlFor from "../../../../clientUtils/urlFor";

function createItems(items = []) {
  if (items.length === 0) {
    return [];
  }
  return items.map((item) => {
    const imgCDN = urlFor(item);
    const { src, alt } = imgCDN;
    const { desc } = item;
    return {
      src,
      alt,
      desc,
    };
  });
}

export default createItems;
