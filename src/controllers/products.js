const { Product, ProductTag } = require("../models");

// get all products
const getAllProducts = async (req, res) => {
	try {
		const data = await Product.findAll();
		return res.json({ success: true, data });
	} catch (err) {
		res.json("GET Products", error.message);
		return res
			.status(500)
			.json({ success: false, error: "Failed to send response" });
	}
};

const getProductById = async (req, res) => {
	try {
		const data = await Product.findByPk(req.params.id);
		if (data) {
			return res.json({ success: true, data });
		}
		return res
			.status(404)
			.json({ success: false, error: "Product does not exist" });
	} catch (err) {
		logError("GET Products", err.message);
		return res
			.status(500)
			.json({ success: false, error: "Failed to send response" });
	}
};

// const getProductById = async (req, res) => {};

// const createProduct = async (req, res) => {};

// const updateProduct = async (req, res) => {};

// const deleteProduct = async (req, res) => {};

module.exports = {
	getAllProducts,
	getProductById,
	// createProduct,
	// updateProduct,
	// deleteProduct,
};
