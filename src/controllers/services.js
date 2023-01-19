const {services} = require('../conceptual/services.js');
const {premises} = require('../conceptual/premises.js');

const sendServicesView = (req , res ) => {
    return res.render ('pages/services.ejs', {services , premises});
};

module.exports = {sendServicesView};