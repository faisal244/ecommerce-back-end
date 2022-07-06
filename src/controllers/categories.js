const { Category } = require("../models");

// get all categories
const getAllCategories = async (req, res) => {
	try {
		const data = await Category.findAll();
		return res.json({ success: true, data });
	} catch (err) {
		logError("GET All Catagories", error.message);
		return res
			.status(500)
			.json({ success: false, error: "Failed to send response" });
	}
};

// get category by ID
const getCategoryById = async (req, res) => {};

// create new category
const createNewCategory = async (req, res) => {};

// update category
const updateCategory = async (req, res) => {};

// delete category
const deleteCategory = async (req, res) => {};

module.exports = {
	getAllCategories,
	getCategoryById,
	createNewCategory,
	updateCategory,
	deleteCategory,
};
