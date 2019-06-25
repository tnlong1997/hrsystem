var express = require('express');
var router = express.Router();
const teamController = require("../controllers/teamController");

router.get("/:teamId/info", teamController.team_get_info);
router.post("/", teamController.team_create);
router.get("/all", teamController.team_get_all);
router.put("/:teamId/update", teamController.team_update_info); // Update
module.exports = router;
