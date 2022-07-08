const { Category } = require("../models");

// Get all categories
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

// Get a category by ID
const getCategoryById = async (req, res) => {
	try {
		const data = await Category.findByPk(req.params.id);
		if (data) {
			return res.json({ success: true, data });
		}
		return res
			.status(404)
			.json({ success: false, error: "Category does not exist" });
	} catch (err) {
		logError("GET categories", err.message);
		return res
			.status(500)
			.json({ success: false, error: "Failed to send response" });
	}
};

// Create a new category
const createNewCategory = async (req, res) => {
	try {
		await Category.create(req.body);
		return res.status(200).json({
			success: true,
			data: "Successfully Created category",
		});
	} catch (error) {
		logError("POST category", error.message);
		return res
			.status(500)
			.json({ success: false, error: "Failed to send response" });
	}
};

// Update a category
const updateCategory = async (req, res) => {
	try {
		await Category.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		return res.json({ success: true, data: "Successfully Updated Category" });
	} catch (error) {
		logError("UPDATE Category", error.message);
		return res
			.status(500)
			.json({ success: false, error: "Failed to send response" });
	}
};

// Delete a category
const deleteCategory = async (req, res) => {
	try {
		await Category.destroy({
			where: {
				id: req.params.id,
			},
		});
		return res.json({ success: true, data: "Successfully Deleted Category" });
	} catch (error) {
		logError("DELETE Category", error.message);
		return res
			.status(500)
			.json({ success: false, error: "Failed to send response" });
	}
};

module.exports = {
	getAllCategories,
	getCategoryById,
	createNewCategory,
	updateCategory,
	deleteCategory,
};
