
const sendContactForm = (req, res) => {
    return res.render('pages/contact.ejs');
};

const sendReceived = (req, res) => {
    return res.render('pages/received.ejs');
}


module.exports = { sendContactForm, sendReceived };
