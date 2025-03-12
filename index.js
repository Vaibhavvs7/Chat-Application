const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

server.listen(9000, () => {`Server is listening to port ${9000}`})
