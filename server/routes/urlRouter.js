const express = require("express");
const router = express.Router();
const {isLoggedIn} = require('../middlewares/isLoggedIn');
const { createUrl } = require('../controllers/urlController');


router.post("/shorten", isLoggedIn, createUrl)


module.exports = router;