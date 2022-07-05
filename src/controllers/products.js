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

const createProduct = async (req, res) => {
	Product.create(req.body)
		.then((product) => {
			// if there's product tags, we need to create pairings to bulk create in the ProductTag model
			if (req.body.tagIds.length) {
				const productTagIdArr = req.body.tagIds.map((tag_id) => {
					return {
						product_id: product.id,
						tag_id,
					};
				});
				return ProductTag.bulkCreate(productTagIdArr);
			}
			// if no product tags, just respond
			res.status(200).json(product);
		})
		.then((productTagIds) => res.status(200).json(productTagIds))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
};

// const updateProduct = async (req, res) => {};

// const deleteProduct = async (req, res) => {};

module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	// updateProduct,
	// deleteProduct,
};
