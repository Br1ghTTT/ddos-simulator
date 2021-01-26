const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const d = new Date().toISOString().slice(0, 19).replace('T', ' ');;

app.use(bodyParser.urlencoded( {extended: false}) );

const unirest = require('unirest');

function sendRequest(i) {

    if( i > 0){
        setTimeout(function() {

        unirest.post('http://localhost:8080/create-user')
            .header('None', 'application/json')
            .send({
            name: 'lala',
            description: 'ddos atack',
            date: d,
            latitude: 49.85246326812933,
            longitude: 23.998221548457174,
            date_deleted: d
            })
            .end(function (response) {
            console.log(response.body);
            });
            sendRequest(i+1)
        }, 1); 
    }
}
    function sendRequest2(i) {

        if( i > 0){
            setTimeout(function() {

            unirest.post('http://localhost:8080/create-users')
            .header('None', 'application/json')
            .send({
            name: 'laфвфкорорla',
            description: 'ddosвіфвфв atack',
            date: d,
            latitude: 4932.8524632681423423424232933,
            longitude: 2334.998221548423423423457174,
            date_deleted: d
            })
            .end(function (response) {
            console.log(response.body);
            });
            sendRequest2(i+1)
        }, 1); 
    }
}
    function sendRequest3(i) {

        if( i > 0){
            setTimeout(function() {
            unirest.post('http://localhost:8080/update-user')
            .header('None', 'application/json')
            .send({
            name: 'lalвіаіаіаa',
            description: 'ddos ваіаіаіаatack',
            date: d,
            latitude: 49.852463268123131231312933,
            longitude: 23.998222131312313131548457174,
            date_deleted: d
            })
            .end(function (response) {
            console.log(response.body);
            });
            sendRequest3(i+1)
        }, 1); 
    }
}
    function sendRequest4(i) {

        if( i > 0){
            setTimeout(function() {
            unirest.post('http://localhost:8080/update-users')
            .header('None', 'application/json')
            .send({
            name: 'lalвіаваa',
            description: 'ddos atackфвфв',
            date: d,
            latitude: 49.852463268432423412933,
            longitude: 242343.998221548457174,
            date_deleted: d
            })
            .end(function (response) {
            console.log(response.body);
            });
            sendRequest4(i+1)
        }, 1); 
    }
}
    function sendRequest5(i) {

        if( i > 0){
            setTimeout(function() {

            unirest.post('http://localhost:8080/delete-user')
            .header('None', 'application/json')
            .send({
            name: 'lal242a',
            description: 'ddos atаіack',
            date: d,
            latitude: 49.85246326234812933,
            longitude: 23.9982211548457174,
            date_deleted: d
            })
            .end(function (response) {
            console.log(response.body);
            });
            sendRequest5(i+1)
        }, 1); 
    }
}
    function sendRequest6(i) {

        if( i > 0){
            setTimeout(function() {
            unirest.post('http://localhost:8080/update-users')
            .header('None', 'application/json')
            .send({
            name: 'lalу324авііa',
            description: 'ddцуршіВos atack',
            date: d,
            latitude: 49.85246326323123142353563812933,
            longitude: 23.99822265464572475421548457174,
            date_deleted: d
            })
            .end(function (response) {
            console.log(response.body);
            });

            sendRequest6(i+1)
        }, 1); 
    }
}
Promise.all([sendRequest(1), sendRequest2(1), sendRequest3(1), sendRequest4(1), sendRequest5(1), sendRequest6(1)])
.then(() => {
    console.log('Sent!');
})
.catch(err => {
    console.log(err);
})

const server = app.listen(3000);
server.setTimeout(5 * 1000000);
console.log('Server is running at port: http://localhost:3000/');
































/* requestify.post('http://localhost:8080/create-users', {
    name: 'lala',
    description: 'ddos atack',
    date: d,
    latitude: 49.85246326812933,
    longitude: 23.998221548457174,
    date_deleted: d
}).then(res => {
    res.getBody();
})
.catch(err => {
    console.log(err);
}) */




/* request.post(
    "localhost:8080/create-user",
    {
        user:{
            name: 'lala',
            description: 'ddos atack',
            date: d,
            latitude: 49.85246326812933,
            longitude: 23.998221548457174,
            date_deleted: d
        }
    },
    function (err, res, body){
        console.log(body);
    }
); */

/* var express = require('express');
var querystring = require('querystring');
var http = require('http');

const d = new Date().getTime();

var app = express();
app.get('/', function (req, res) {
  var data = querystring.stringify({
    name: 'lala',
    description: 'ddos atack',
    date: d,
    latitude: 49.85246326812933,
    longitude: 23.998221548457174,
    date_deleted: d
  });

  var options = {
    host: 'http://localhost:8080/',
    port: 8080,
    path: '/create-users',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  var httpreq = http.request(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      console.log("body: " + chunk);
    });
    response.on('end', function() {
      res.send('ok');
    })
  });
  httpreq.write(data);
  httpreq.end();
});
app.listen(3000);
console.log('Server is running at port: http://localhost:3000/'); */
