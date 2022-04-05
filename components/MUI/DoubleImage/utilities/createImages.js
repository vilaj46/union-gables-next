import urlFor from "../../../../clientUtils/urlFor";

function createImages(images) {
  const imgOne = urlFor(images.imageOne);
  const imgTwo = urlFor(images.imageTwo);
  return {
    imageOne: {
      src: imgOne.src,
      alt: imgOne.alt || "",
    },
    imageTwo: {
      src: imgTwo.src,
      alt: imgTwo.alt || "",
    },
  };
}

export default createImages;
