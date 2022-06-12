const size = {
  mobileXS: "200px",
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  cs: "960px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1920px",
};

//
const device = {
  mobileXS: `(min-width: ${size.mobileS})`,
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  cs: `(min-width: ${size.cs})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export default device;
