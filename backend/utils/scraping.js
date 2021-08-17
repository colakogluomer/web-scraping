const axios = require("axios");
const cheerio = require("cheerio");
const ApiError = require("./ApiError");

const scrapProduct = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const name = $(".wt-mb-xs-2").find("h1").text().trim();
    const image = $(".wt-position-absolute")
      .find(".wt-max-width-full")
      .attr("src");
    const priceWithSymbols = $(".wt-text-title-03").text();
    const price = priceWithSymbols.replace(/[£+Price:]/g, "");
    return {
      name,
      image,
      price,
    };
  } catch (error) {
    throw new ApiError(400, "Please fill the input with literally link.");
  }
};

module.exports = { scrapProduct };
