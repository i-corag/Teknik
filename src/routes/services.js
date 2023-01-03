const {Router} = require ('express');
const router = Router();

const {sendServicesView} = require ('../controllers/services');

router.get ('/services' , sendServicesView);

module.exports = router;