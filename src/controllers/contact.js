
const sendContactForm = (req , res) => {
    return res.render ('pages/contact.ejs');
};

const sendMessageReceived = (req , res) => {
    return res.render ('pages/messageReceived.ejs');
};

module.exports = { sendContactForm, sendMessageReceived };
