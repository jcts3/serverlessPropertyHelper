const axios = require("axios");
const fs = require("fs");

const propertyListingUrl = "https://api.zoopla.co.uk/api/v1/property_listings.js";

const getParams = async () => {
  const params = await fs.readFileSync("./params.json");
  return JSON.parse(params);
};

const buildConfig = async () => {
  return {
    params: await getParams(),
    url: propertyListingUrl,
    headers: {},
    method: "get"
  };
};

const axiosRequest = async config => {
  const result = axios(config);
  return result;
};

const queryZooplaPropertyListing = async () => {
  const config = await buildConfig();
  const result = await axiosRequest(config);
  return result.data;
};

module.exports = {
  queryZoopla: queryZooplaPropertyListing
};
