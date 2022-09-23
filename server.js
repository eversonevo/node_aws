const http = require('http');
const port = process.env.PORT || 3000;
const host = '18.229.118.246';
const app = require('./app');

const server = http.createServer(app);
server.listen(port,host, ()=> {
    console.log(`Server is running on http://${host}:${port}`);
});

console.log('Funcionando');
console.log('port');
server.listen(port);
