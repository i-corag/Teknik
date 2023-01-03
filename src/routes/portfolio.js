
const {Router} = require('express');
const router = Router();

const {sendPortfolioView} = require ('../controllers/portfolio');

router.get ('/portfolio' , sendPortfolioView);

module.exports = router;