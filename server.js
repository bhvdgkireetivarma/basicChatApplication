
const io = require('socket.io')(8000, {
    cors: {
      origin: '*',
    }
  });
var obj={};

io.on('connection',socket=>{
    // when ever new user is joined
    //client will send notification

    socket.on('new-user-joined',name =>{
        obj[socket.id]=name;
socket.broadcast.emit('user-joined',name);

    })
    //when ever user sends message client will send notification
    socket.on('send',message=>{
        obj['message']=message;
        socket.broadcast.emit('receive',{message:message,name:obj[socket.id]});
        //will send it to all except the one who sends the request(client)
    })

})

