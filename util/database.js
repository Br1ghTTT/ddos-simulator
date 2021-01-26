const Sequelize = require('sequelize');

const sequelize = new Sequelize('ddos-simulator', 'root', '12345code22-105', {   // на місці ******* має бутии пароль до root в твому воркбенчі
    dialect: 'mysql',
    host: 'localhost',
    pool: {
        max: 100,
        min:0,
        idle: 200000,
        acquire: 100*1000,
    }
});

module.exports = sequelize;
