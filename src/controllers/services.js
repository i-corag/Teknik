const { services } = require('../models/services.js');

const sendServicesView = (req, res) => {
    return res.render('pages/services.ejs', { services });
};

module.exports = { sendServicesView };
