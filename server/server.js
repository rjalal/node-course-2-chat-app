require('./config/config.js');

const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'/../public');
const port = process.env.PORT;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected.');

    // socket.emit('newEmail',{
    //     from: 'rami@gmail.com',
    //     text: 'Hello, its me!!',
    //     createdAt: 123 
    // });

    // socket.emit('newMessage', {
    //     from:'rami',
    //     text: 'can we meet up at 6',
    //     createdAt: new Date()
    // });

    // socket.on('createEmail', (email)=> {
    //     console.log('Email has been created from the client', email);
    // });

    socket.on('disconnect', () => {
        console.log('User disconnectd.');
    });

    socket.on('createMessage', (message)=> {
        console.log('Message has been created.',message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        } );
    });
})

server.listen(port, ()=> {
    console.log(`Started up at port ${port}`);
});
