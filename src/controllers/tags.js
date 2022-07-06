const { Tag } = require("../models");

// get all tags
const getAllTags = async (req, res) => {
	try {
		const data = await Tag.findAll();
		return res.json({ success: true, data });
	} catch (err) {
		res.json("GET Tags", error.message);
		return res
			.status(500)
			.json({ success: false, error: "Failed to send response" });
	}
};

// Get tag by ID function
const getTagById = async (req, res) => {};

const createTag = async (req, res) => {};

// update tag function
const updateTag = async (req, res) => {
	try {
		await Tag.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		return res.json({ success: true, data: "Successfully Update Tag" });
	} catch (error) {
		logError("UPDATE Tag", error.message);
		return res
			.status(500)
			.json({ success: false, error: "Failed to send response" });
	}
};

const deleteTag = async (req, res) => {};

module.exports = {
	getAllTags,
	getTagById,
	createTag,
	updateTag,
	deleteTag,
};
