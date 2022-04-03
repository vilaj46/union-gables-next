import urlFor from "../../../../clientUtils/urlFor";

function createImages(images = []) {
  if (images.length === 0) {
    return [];
  }
  return images.map((img) => {
    const imgCDN = urlFor(img);
    const { src, alt } = imgCDN;
    return {
      src,
      alt,
    };
  });
}

export default createImages;
