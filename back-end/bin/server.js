'use strict';

const http = require('http');
const app = require('../src/app');

const port = process.env.PORT || 5000;

app.set('port', port);

const server = http.createServer(app);
const io = require('socket.io').listen(server);

server.listen(port);
server.on('error', onError);

io.on('connection', client => {
  console.log('User connected')

  client.on('disconnect', () => {
    console.log('User disconnected')
  })

  client.on('chatMessage', msg => {
    client.broadcast.emit('chatMessage', msg)
  })
})

console.log("Server started on port " + port);

function onError(error){
  if(error.syscall !== 'listen') throw error;

  const bind = "Port " + port;

  switch(error.code){
    case 'EACCES':
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
