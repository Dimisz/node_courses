const express = require('express');

const messagesRouter = require('./routes/messages.router');
const friendsRouter = require('./routes/friends.router');

const app = express();
const PORT = 3000;



app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} and took ${delta}ms`);
});


app.use(express.json());

app.use(friendsRouter);
app.use(messagesRouter);

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})
