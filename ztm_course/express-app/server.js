const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Albert Einstein'
    }, 
    {
        id: 1,
        name: 'Sir Isaac Newton'
    }
];

app.get('/friends', (req, res) => {
    res.status(200).json(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if(friend){
        res.json(friend);
    }
    else{
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
})

app.get('/messages', (req, res) => {
    res.send("<h1>Messages</h1>");
});

app.post('/messages', (req, res) => {
    console.log('Updating mesages...');
})

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})