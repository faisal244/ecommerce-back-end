const { Router } = require("express");
const { Product, Category, Tag, ProductTag } = require("../../models");

const {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	// deleteProduct,
} = require("../../controllers/products");

const router = Router();

// The `/api/products` endpoint

// get all products
router.get("/", getAllProducts);
// find all products
// be sure to include its associated Category and Tag data

// get one product
router.get("/:id", getProductById);
// find a single product by its `id`

// be sure to include its associated Category and Tag data

// create new product
router.post("/", createProduct);
/* req.body should look like this...
    {
      "product_name": "BIG SHINEY Basketball",
      "price": "200.00",
      "stock": 300,
      "tagIds": 3,
      "category_id": 3
    }
  */

// update product
router.put("/:id", updateProduct);

router.delete("/:id", (req, res) => {
	// delete one product by its `id` value
});

module.exports = router;
