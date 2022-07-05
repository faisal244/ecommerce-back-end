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

// const getProductById = async (req, res) => {};

// const getProductById = async (req, res) => {};

// const createProduct = async (req, res) => {};

// const updateProduct = async (req, res) => {};

// const deleteProduct = async (req, res) => {};

module.exports = {
	getAllProducts,
	// getProductById,
	// createProduct,
	// updateProduct,
	// deleteProduct,
};
