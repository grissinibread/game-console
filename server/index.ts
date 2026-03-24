import { WebSocket } from 'ws'; 

let server = new WebSocket.Server({port: 8080});

server.on('connection', socket => {
  socket.on('message', message => {

    socket.send(`Roger that! ${message}`);

  });
});
