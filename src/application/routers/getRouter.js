var express= require('express');
var router = express.Router();

var controller = require('../controllers/getController');

router.get('/web', controller.getAsWeb);
router.get('/json', controller.getAsJson);

module.exports = router;