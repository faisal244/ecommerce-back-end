const { Router } = require("express");
const { Product, Category, Tag, ProductTag } = require("../../models");

const {
	getAllProducts,
	getProductById,
	createProduct,
	// updateProduct,
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
router.put("/:id", (req, res) => {
	// update product data
	Product.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((product) => {
			// find all associated tags from ProductTag
			return ProductTag.findAll({ where: { product_id: req.params.id } });
		})
		.then((productTags) => {
			// get list of current tag_ids
			const productTagIds = productTags.map(({ tag_id }) => tag_id);
			// create filtered list of new tag_ids
			const newProductTags = req.body.tagIds
				.filter((tag_id) => !productTagIds.includes(tag_id))
				.map((tag_id) => {
					return {
						product_id: req.params.id,
						tag_id,
					};
				});
			// figure out which ones to remove
			const productTagsToRemove = productTags
				.filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
				.map(({ id }) => id);

			// run both actions
			return Promise.all([
				ProductTag.destroy({ where: { id: productTagsToRemove } }),
				ProductTag.bulkCreate(newProductTags),
			]);
		})
		.then((updatedProductTags) => res.json(updatedProductTags))
		.catch((err) => {
			// console.log(err);
			res.status(400).json(err);
		});
});

router.delete("/:id", (req, res) => {
	// delete one product by its `id` value
});

module.exports = router;
