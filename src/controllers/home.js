const { teamMembers } = require('../models/workteam.js');
const { premises } = require('../models/premises.js');


const sendHomeView = (req, res) => {
    return res.render('pages/home.ejs', { teamMembers, premises });
};

module.exports = { sendHomeView }; 