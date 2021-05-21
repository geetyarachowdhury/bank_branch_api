// requir for creating server
const http = require('http');
const app = require('./app');

// import app

// port
const port = process.env.PORT || 5000;

// create a server with a func (which we define in app.js) is executed whenever we get a new request and get a response
const server = http.createServer(app);

// listen to port with server

server.listen(port, () => {
    console.log("server is listening to port:", port);
});