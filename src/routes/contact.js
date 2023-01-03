const {Router} = require ('express');
const router = Router();

const { sendContactForm , sendMessageReceived} = require ('../controllers/contact');

router.get ('/contact' , sendContactForm);
router.post ('/contact' , sendMessageReceived);

module.exports = router;
