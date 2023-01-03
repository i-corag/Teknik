const {Router} = require('express');
const router = Router();

const {sendHomeView} = require('../controllers/home');

router.get ('/' , sendHomeView);

module.exports = router;