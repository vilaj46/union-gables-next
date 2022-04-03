import urlFor from "../../../clientUtils/urlFor";

function createSlideImages(slides = []) {
  return slides.map((img) => {
    const imgCDN = urlFor(img);
    const { src, alt } = imgCDN;
    return {
      src,
      alt,
    };
  });
}

export default createSlideImages;
