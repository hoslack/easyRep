const reportRouter = require('express').Router();
const createReport = require('../controllers/createReport');
const sendEmail = require('../controllers/sendEmail');

//add report to the database
reportRouter.post('/create_report', createReport);
reportRouter.post('/send_email', sendEmail);

module.exports = reportRouter;
