const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controller/error');
const sequelize = require('./util/database');

const app = express();

const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended:false }));

app.use(adminRoutes);

app.use(errorController.get404);

sequelize.sync()
.then(result => {
    app.listen(8080);
    console.log('Server is runnig at port: http://localhost:8080/');
})
.catch(err => {
    console.log(err);
})

