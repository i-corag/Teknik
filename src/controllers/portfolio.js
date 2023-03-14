const { projects } = require('../models/projects.js');

const sendPortfolioView = (req, res) => {
    return res.render('pages/portfolio.ejs', { projects });
};

const sendProjectView = (req, res) => {
    const { id } = req.params;
    const project = projects.find((projects) => projects.id === id);
    return res.render('pages/project.ejs', { project });
};

module.exports = { sendPortfolioView, sendProjectView };
