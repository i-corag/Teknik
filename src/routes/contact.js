const { Router } = require('express');
const router = Router();

const { sendContactForm, sendReceived } = require('../controllers/contact.js');

router.get('/', sendContactForm);
router.get('/received', sendReceived);

module.exports = router;


