var socket = io();

socket.on('connect', function() {
    console.log('Connected to the sever');

    socket.emit('createEmail', {
        to: 'dalal@gmail.com',
        text: 'how is it going'
    });

    socket.emit('createMessage',{
        from: 'Dalal',
        text: 'yes we can'
    });

});

socket.on('disconnect', function() {
    console.log('Disconnected from the sever.');
    });

socket.on('newEmail', function (email) {
    console.log('New email initiated from the server',email)
});    

socket.on('newMessage', function(message){
    console.log('New message has arrived', message);
});