// option 1 HTTP
/*
const http = require('http');

const req = http.request('http://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log("No more data");
    });
});

req.end();
*/

// option 2 HTTPS
/*
const https = require('https');

const req = https.request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log("No more data");
    });
});

req.end();
*/

// option 3 USING DESTRUCTURING
const { get } = require('https');

get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log("No more data");
    });
});