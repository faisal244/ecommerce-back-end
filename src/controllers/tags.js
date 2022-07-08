const { Tag } = require("../models");

// Get all tags
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

// Get a single tag by ID
const getTagById = async (req, res) => {
	try {
		const data = await Tag.findByPk(req.params.id);
		if (data) {
			return res.json({ success: true, data });
		}
		return res
			.status(404)
			.json({ success: false, error: "Tag does not exist" });
	} catch (err) {
		logError("GET Tags", err.message);
		return res
			.status(500)
			.json({ success: false, error: "Failed to send response" });
	}
};

// Create a tag function
const createTag = async (req, res) => {
	try {
		await Tag.create(req.body);
		return res.json({ success: true, data: "Successfully Created Tag" });
	} catch (error) {
		logError("POST Tag", error.message);
		return res
			.status(500)
			.json({ success: false, error: "Failed to send response" });
	}
};

// Update a tag function
const updateTag = async (req, res) => {
	try {
		await Tag.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		return res.json({ success: true, data: "Successfully Updated Tag" });
	} catch (error) {
		logError("UPDATE Tag", error.message);
		return res
			.status(500)
			.json({ success: false, error: "Failed to send response" });
	}
};

// Delete a tag function
const deleteTag = async (req, res) => {
	try {
		await Tag.destroy({
			where: {
				id: req.params.id,
			},
		});
		return res.json({ success: true, data: "Successfully Deleted Tag" });
	} catch (error) {
		logError("DELETE Tag", error.message);
		return res
			.status(500)
			.json({ success: false, error: "Failed to send response" });
	}
};

module.exports = {
	getAllTags,
	getTagById,
	createTag,
	updateTag,
	deleteTag,
};
