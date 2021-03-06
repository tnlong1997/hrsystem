var express = require('express');
var router = express.Router();
const performanceController = require('../controllers/performanceController');
var jwt = require('jsonwebtoken');
var secret = require('../config/secret');

// jsonwebtoken
router.use(function(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });}
          else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          next();
        }
      });
    } else {
      // if there is no token
      // return an error
      return res.status(403).send({
          success: false,
          message: 'No token provided.'
      });
    }
  });

  router.post('/', performanceController.performance_create);
  router.get('/:performanceId/info', performanceController.performance_get_info);
  router.put('/:performanceId/info', performanceController.performance_edit);
  router.get('/all', performanceController.performance_all);
  router.get('/info/:id', performanceController.performance_by_id);

  module.exports = router;
