const Router = require('koa-router');
const ItemController = require('../controller/itemController')
const jwt = require('koa-jwt');

const router = new Router();
const auth = jwt({ secret: 'secret' });

router.post('/login', ItemController.login);
router.post('/items', ItemController.create);
router.get('/items', ItemController.findAll);
router.get('/items/:id', ItemController.findById);
router.put('/items/:id', auth, ItemController.update);
router.delete('/items/:id',auth, ItemController.delete);

module.exports = router;