const express = require('express')
router = express.Router()
controller = require('../controllers/MenuProductController')

router.get('/', controller.findAll);
router.post('/add', controller.insert);
router.post('/update', controller.update);
router.get('/product', controller.findOne);
router.get('/:category', controller.find);
router.post('/delete', controller.delete);
//router.get('/categories', controller.categories);









module.exports = router;
