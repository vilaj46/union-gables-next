import urlFor from "../../../../clientUtils/urlFor";

function createImages(carouselOne = [], carouselTwo = []) {
  const c1 = carouselOne.map((img) => {
    const imgCDN = urlFor(img);
    const { src, alt } = imgCDN;
    return {
      src,
      alt,
    };
  });
  const c2 = carouselTwo.map((img) => {
    const imgCDN = urlFor(img);
    const { src, alt } = imgCDN;
    return {
      src,
      alt,
    };
  });

  return {
    carouselOne: c1,
    carouselTwo: c2,
  };
}

export default createImages;
