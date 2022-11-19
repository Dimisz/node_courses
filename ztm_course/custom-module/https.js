const request = require('./request');
const response = require('./response');

function makeRequest(url, data){
    request.send(url, data);
    return response.read();
}

const answer = makeRequest('https://google.com', 'hello');
console.log(answer);