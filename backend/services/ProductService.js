const BaseService = require("./BaseService");
const Product = require("../models/Product");

class ProductService extends BaseService {}

module.exports = new ProductService(Product);
