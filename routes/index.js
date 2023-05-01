var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/index')
/* GET home page. */
router.get('/', indexCtrl.index)
router.get('/about',indexCtrl.about)
router.get('/tech', indexCtrl.tech)

module.exports = router;
