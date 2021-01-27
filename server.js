const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const d = new Date().toISOString().slice(0, 19).replace('T', ' ');;

app.use(bodyParser.urlencoded( {extended: false}) );

const unirest = require('unirest');

function sendRequest(){
    for(let i = 0; i < 1000; i++){
        setTimeout(async function() {
            let req = unirest.post('http://localhost:8080/create-user')
                .header('None', 'application/json')
                .send({
                    name: 'lala',
                    description: 'ddos atack',
                    date: d,
                    latitude: 49.852,
                    longitude: 23.94,
                    date_deleted: d
                })
                .end(function () {
                    console.log('Successfully!');
                });

            let req2 = unirest.post('http://localhost:8080/create-users')
                .header('None', 'application/json')
                .send({
                    name: 'dala',
                    description: 'ddos atack',
                    date: d,
                    latitude: 4932.833,
                    longitude: 2334.998,
                    date_deleted: d
                })
                .end(function () {
                    console.log('Successfully!');
                });

            let req3 = unirest.post('http://localhost:8080/update-user')
                .header('None', 'application/json')
                .send({
                    name: 'sala',
                    description: 'ddos atack',
                    date: d,
                    latitude: 49.852,
                    longitude: 23.994,
                    date_deleted: d
                })
                .end(function () {
                    console.log('Successfully!');
                });

            let req4 = unirest.post('http://localhost:8080/update-users')
                .header('None', 'application/json')
                .send({
                    name: 'gala',
                    description: 'ddos atack',
                    date: d,
                    latitude: 49.933,
                    longitude: 24.974,
                    date_deleted: d
                })
                .end(function () {
                    console.log('Successfully!');
                });

            let req5 = unirest.post('http://localhost:8080/delete-user')
                .header('None', 'application/json')
                .send({
                    name: 'hala',
                    description: 'ddos atаck',
                    date: d,
                    latitude: 49.833,
                    longitude: 23.964,
                    date_deleted: d
                })
                .end(function () {
                    console.log('Successfully!');
                });

            let req6 = unirest.post('http://localhost:8080/update-users')
                .header('None', 'application/json')
                .send({
                    name: 'zala',
                    description: 'ddos atack',
                    date: d,
                    latitude: 49.8523,
                    longitude: 23.994,
                    date_deleted: d
                })
                .end(function () {
                    console.log('Successfully!');
                });
            
            req++;
            req2++;
            req3++;
            req4++;
            req5++;
            req6++;
            return await req, req2, req3, req4, req5, req6;
        }, 100); 
    }
}


async function asyncCall() {
    await Promise.all([sendRequest()])
        .then(() => {
            console.log('Sent!');
        })
        .catch(err => {
            console.log(err);
        })
}

asyncCall();

app.listen(3000);
console.log('Server is running at port: http://localhost:3000/');
