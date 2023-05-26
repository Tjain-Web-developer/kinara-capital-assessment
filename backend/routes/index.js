var express = require('express');
const { homePage } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', homePage);

module.exports = router;
