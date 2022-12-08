const express = require('express');

// friends routes
const friendsRouter = express.Router();
const friendsController = require('../controllers/friends.controller');

friendsRouter.post('/friends', friendsController.postAFriend);
friendsRouter.get('/friends', friendsController.getAllFriends);
friendsRouter.get('/friends/:friendId', friendsController.getAFriend);


module.exports = friendsRouter;