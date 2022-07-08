const router = require("express").Router();

const {
	getAllTags,
	getTagById,
	createTag,
	updateTag,
	deleteTag,
} = require("../../controllers/tags");

// The `/api/tags` endpoint

// find all tags
router.get("/", getAllTags);

// find a single tag by its `id`
router.get("/:id", getTagById);

// create a new tag
router.post("/", createTag);

// update a tag's name by its `id` value
router.put("/:id", updateTag);

// delete on tag by its `id` value
router.delete("/:id", deleteTag);

module.exports = router;
