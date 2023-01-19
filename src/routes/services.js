const {Router} = require ('express');
const router = Router();

const {sendServicesView} = require ('../controllers/services');

router.get ('/' , sendServicesView);

module.exports = router;