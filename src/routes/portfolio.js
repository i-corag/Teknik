
const {Router} = require('express');
const router = Router();

const {sendPortfolioView , sendProjectView} = require ('../controllers/portfolio');

router.get ('/' , sendPortfolioView);

router.get ("/:id", sendProjectView);

module.exports = router;