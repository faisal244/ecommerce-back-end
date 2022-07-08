const { Router } = require("express");

const {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
} = require("../../controllers/products");

const router = Router();

// The `/api/products` endpoint

// get all products
router.get("/", getAllProducts);

// get one product - find a single product by its `id`
router.get("/:id", getProductById);

// create new product
router.post("/", createProduct);

// update product
router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);
// delete one product by its `id` value

module.exports = router;
