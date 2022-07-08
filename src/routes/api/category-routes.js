const router = require("express").Router();

const {
	getAllCategories,
	getCategoryById,
	createNewCategory,
	updateCategory,
	deleteCategory,
} = require("../../controllers/categories");

// The `/api/categories` endpoint

// find all categories
router.get("/", getAllCategories);

// find one category by its `id` value
router.get("/:id", getCategoryById);

// create a new category
router.post("/", createNewCategory);

// update a category by its `id` value
router.put("/:id", updateCategory);

// delete a category by its `id` value
router.delete("/:id", deleteCategory);

module.exports = router;
