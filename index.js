const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

app.use(express.static('/public'));

app.get('/', (req, res) => {
    return res.sendFile('./public/index.html', { root: __dirname });
})

server.listen(9000, () => console.log(`Server is listening to port 9000`))
