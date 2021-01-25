const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize = require('./util/database'); 

const app = express();

const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

app.use(errorController.get404);

sequelize.sync()
    .then(() => {
        app.listen(8080);
        console.log('Server is running on port http://localhost:8080/');
    })
    .catch(err =>{
        console.log(err);
    });
