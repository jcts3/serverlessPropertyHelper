const axios = require("axios");
const fs = require("fs");
// const params = reqire("./params.json");

const propertyListingUrl = "https://api.zoopla.co.uk/api/v1/property_listings.js";

const getParams = async () => {
  const params = await fs.readFileSync("./params.json");
  return JSON.parse(params);
};

const buildConfig = async () => {
  const config = {
    params: await getParams(),
    url: propertyListingUrl,
    headers: {},
    method: "get"
  };
  console.log(config);
  return config;
};

const axiosRequest = async config => {
  const result = await axios(config);
  return result;
};

const main = async () => {
  const config = await buildConfig();
  console.log(config);
  const result = await axiosRequest(config);
  console.log(result);
};

main();
