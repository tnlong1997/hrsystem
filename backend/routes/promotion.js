var express = require('express');
var router = express.Router();
const promotionController = require('../controllers/promotionController');

router.get("/all", promotionController.promotion_get_all);

module.exports = router;
