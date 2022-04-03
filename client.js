// import sanityClient from '@sanity/client'
const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "hwbiz02h",
  dataset: "production",
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2022-01-31",
});

// export default client
module.exports = client;
