const router = require("express").Router();
const productController = require("../controllers/productController");

router.post("/insert", productController.addProduct);
router.get("/find/all", productController.findAllProducts);
router.get("/find/:id", productController.findOneProduct);

module.exports = router;
