const {teamMembers} = require('../conceptual/workteam.js');


const sendHomeView = (req , res) => {
    return res.render('pages/home.ejs', {teamMembers});
};

module.exports = {sendHomeView};