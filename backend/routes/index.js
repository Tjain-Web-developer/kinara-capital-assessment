var express = require('express');
const { homePage, createStudents, viewStudents, filterStudents } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', homePage);

/* GET create student. */
router.get("/create/students",createStudents);

/* GET view students. */
router.get("/view/students",viewStudents);

/* GET filter students. */
router.get("/filter/students",filterStudents);
module.exports = router;
