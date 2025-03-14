const http = require('http');
const express = require('express');
const {Server} = require('socket.io');
const { Socket } = require('dgram');


const app = express();
const server = http.createServer(app);
const io = new Server(server);

//Socket.io
io.on("connection", (socket) => {
    socket.on('user-message', (message) => {
        io.emit('message', message);
    })
});

app.use(express.static('/public'));

app.get('/', (req, res) => {
    return res.sendFile('./public/index.html', { root: __dirname });
})

server.listen(9000, () => console.log(`Server is listening to port 9000`))
