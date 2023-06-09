var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts')

router.get('/', postsCtrl.index);
router.get('/new',postsCtrl.new);
router.get('/:id', postsCtrl.show);
router.post('/', postsCtrl.create);
router.delete('/:id', postsCtrl.delete);
router.put('/:id', postsCtrl.update);
router.get('/:id/edit', postsCtrl.edit);

module.exports = router;
