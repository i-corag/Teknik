const {Router} = require ('express');
const router = Router();

const { sendContactForm , sendMessageReceived} = require ('../controllers/contact.js');

router.get ('/' , sendContactForm);
router.post ('/' , sendMessageReceived);

module.exports = router;
