const sendContactForm = (req, res) => {
  return res.render("pages/contact.ejs", { baseUrl: process.env.BASE_URL });
};

const sendReceived = (req, res) => {
  return res.render("pages/received.ejs");
};

module.exports = { sendContactForm, sendReceived };
