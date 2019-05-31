var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', userController.user_sign_up);
router.post('/signin', userController.user_sign_in);
router.get('/info/:id', userController.user_get_info);
router.put('/info/:id', userController.user_update_info);
module.exports = router;
