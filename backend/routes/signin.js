var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

router.post('/', userController.user_sign_in);

module.exports = router;
