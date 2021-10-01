const express = require('express')
router = express.Router()
controller = require('../controllers/MenuCategoryController')

router.get('/', controller.findAll);
router.post('/add', controller.insert);
router.post('/update', controller.update);
router.get('/:category', controller.findOne);
router.post('/delete', controller.delete);
//router.get('/categories', controller.categories);









module.exports = router;