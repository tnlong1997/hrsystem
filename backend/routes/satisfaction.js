var express = require('express');
var router = express.Router();
const satisfactionController = require('../controllers/satisfactionController');

router.get("/all", satisfactionController.satisfaction_get_all);

module.exports = router;
