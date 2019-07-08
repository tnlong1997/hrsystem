var express = require('express');
var router = express.Router();
const teamController = require("../controllers/teamController");
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

router.get("/:teamId/info", teamController.team_get_info);
router.post("/", teamController.team_create);
router.get("/all", teamController.team_get_all);
router.put("/:teamId/update", teamController.team_update_info); // Update
module.exports = router;
