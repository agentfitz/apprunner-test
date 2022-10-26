
import http from 'http';
import fs from 'fs';

const PORT = process.env.PORT || 3000;

console.log('hi, the server will be listening on port ' + PORT);

let server = http.createServer((request, response) => {

    console.log(request.url);

    if (request.url === '/about') {
        response.write('<h1>About us.</h1>');
    } else if (request.url === '/monkeys') {
        response.write('<h1>Monkeys are great.</h1>');
    } else {
        response.write('<h1>Hello World.</h1>');
    }

});

server.listen(PORT);