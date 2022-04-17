import urlFor from "../../../../clientUtils/urlFor";

function createImages(image = {}, images = []) {
  if (Object.keys(image).length > 0) {
    const { src, alt } = urlFor(image);
    return {
      src,
      alt,
    };
  } else {
    return images.map((img) => {
      const { src, alt } = urlFor(img);
      return {
        src,
        alt,
      };
    });
  }
}

export default createImages;
