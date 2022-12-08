const express = require('express');

const messagesRouter = express.Router();
const messagesController = require('../controllers/messages.controller');
// messages routes
messagesRouter.get('/messages', messagesController.getMessages);
messagesRouter.post('/messages', messagesController.postMessage);

module.exports = messagesRouter;
