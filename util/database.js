const Sequelize = require('sequelize');

const sequelize = new Sequelize('ddos-simulator', 'root', '*********', {   // на місці ******* має бутии пароль до root в твому воркбенчі
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;