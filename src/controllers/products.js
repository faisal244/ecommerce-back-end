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

module.exports = {
	getAllProducts,
};
