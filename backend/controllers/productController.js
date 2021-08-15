const ProductService = require("../services/ProductService");
const scraping = require("../utils/scraping");

const addProduct = async (req, res, next) => {
  try {
    const scrappedProduct = await scraping.scrapProduct(req.body.url);
    const product = await ProductService.insert(scrappedProduct);
    res.send(product);
  } catch (error) {}
};

const findAllProducts = async (req, res, next) => {
  try {
    const products = await ProductService.findAll();
    res.send(products);
  } catch (error) {}
};

const findOneProduct = async (req, res, next) => {
  try {
    const product = await ProductService.findOne(req.params.id);
    res.send(product);
  } catch (error) {}
};

module.exports = {
  addProduct,
  findAllProducts,
  findOneProduct,
};
