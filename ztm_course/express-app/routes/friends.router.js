const express = require('express');

// friends routes
const friendsRouter = express.Router();
const friendsController = require('../controllers/friends.controller');


friendsRouter.use((req, res, next) => {
    console.log(`ip address: ${req.ip}`);
    next();
});

friendsRouter.post('/friends', friendsController.postAFriend);
friendsRouter.get('/friends', friendsController.getAllFriends);
friendsRouter.get('/friends/:friendId', friendsController.getAFriend);


module.exports = friendsRouter;