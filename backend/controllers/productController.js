const ProductService = require("../services/ProductService");
const scraping = require("../utils/scraping");

const addProduct = async (req, res, next) => {
  try {
    const scrappedProduct = await scraping.scrapProduct(req.body.link);
    const product = await ProductService.insert(scrappedProduct);
    console.log(product);
    res.send(product);
  } catch (error) {
    next(error);
  }
};

const findAllProducts = async (req, res, next) => {
  try {
    const products = await ProductService.findAll();
    res.send(products);
  } catch (error) {
    next(error);
  }
};

const findOneProduct = async (req, res, next) => {
  try {
    const product = await ProductService.findOne(req.params.id);
    res.send(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addProduct,
  findAllProducts,
  findOneProduct,
};
