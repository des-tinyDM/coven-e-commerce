const express = require("express");
const router = express.Router();

const { getItems } = require(`${__dirname}/../controllers/itemsController`);

router.get(`/`, getItems);

module.exports = router;
