const {Router} = require('express');
const router = Router();

const {sendHomeView} = require('../controllers/home');

router.get ('/' , sendHomeView);
router.get ('/home' , sendHomeView);

module.exports = router;