var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

router.post('/signup', userController.user_sign_up);
router.post('/signin', userController.user_sign_in);
router.get('/info/:id', userController.user_get_info);
router.put('/info/:id', userController.user_update_info);
router.get('/', userController.user_get_all_users);

module.exports = router;
