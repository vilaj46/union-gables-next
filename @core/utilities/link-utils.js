export const isDomesticLink = (href) => {
  if (!href.startsWith("http")) {
    return true;
  } else {
    return false;
  }
};
