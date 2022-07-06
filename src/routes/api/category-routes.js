const router = require("express").Router();
const { Category, Product } = require("../../models");
const {
	getAllCategories,
	getCategoryById,
	createNewCategory,
	updateCategory,
	deleteCategory,
} = require("../../controllers/categories");

// The `/api/categories` endpoint

router.get("/", getAllCategories);
// find all categories
// be sure to include its associated Products
// add try catch statements to each

router.get("/:id", (req, res) => {
	// find one category by its `id` value
	// be sure to include its associated Products
});

router.post("/", (req, res) => {
	// create a new category
});

router.put("/:id", (req, res) => {
	// update a category by its `id` value
});

router.delete("/:id", (req, res) => {
	// delete a category by its `id` value
});

module.exports = router;
