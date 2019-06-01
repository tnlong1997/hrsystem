var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

router.post('/signup', userController.user_sign_up);
router.post('/signin', userController.user_sign_in);
router.get('/info/:id', userController.user_get_info);
router.put('/info/:id', userController.user_update_info);
<<<<<<< HEAD
router.get('/', userController.user_get_all_users);
=======
router.get('/user', userController.user_get_info);
>>>>>>> c06dcd739ef4ee0c6d1b6e76c01158cdf072bb06
module.exports = router;
