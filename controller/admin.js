const User = require('../models/info');

const inf = require('../app');

exports.getUser = (req, res, next) => {
    res.send('<h1>Test user</h1>');
};

exports.getUsers = (req, res, next) => {
    res.send('<h1>Test users</h1>');
};

exports.postCreateUser = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const date = req.body.date;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const date_deleted = req.body.date_deleted;
    User.create({
        name: name,
        description: description,
        date: date,
        latitude: latitude,
        longitude: longitude,
        date_deleted: date_deleted
    })
    .then(result => {
        console.log('Connected');
    })
    .catch(err => {
        console.log(err);
    })
};

exports.postCreateUsers = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const date = req.body.date;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const date_deleted = req.body.date_deleted;
    User.create({
        name: name,
        description: description,
        date: date,
        latitude: latitude,
        longitude: longitude,
        date_deleted: date_deleted
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
};

exports.postUpdateUser = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const date = req.body.date;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const date_deleted = req.body.date_deleted;
    User.create({
        name: name,
        description: description,
        date: date,
        latitude: latitude,
        longitude: longitude,
        date_deleted: date_deleted
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
};

exports.postUpdateUsers = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const date = req.body.date;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const date_deleted = req.body.date_deleted;
    User.create({
        name: name,
        description: description,
        date: date,
        latitude: latitude,
        longitude: longitude,
        date_deleted: date_deleted
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
};

exports.postUpdateUser = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const date = req.body.date;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const date_deleted = req.body.date_deleted;
    User.create({
        name: name,
        description: description,
        date: date,
        latitude: latitude,
        longitude: longitude,
        date_deleted: date_deleted
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
};

exports.postUpdateUsers = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const date = req.body.date;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const date_deleted = req.body.date_deleted;
    User.create({
        name: name,
        description: description,
        date: date,
        latitude: latitude,
        longitude: longitude,
        date_deleted: date_deleted
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
};

exports.postDeleteUser = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const date = req.body.date;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const date_deleted = req.body.date_deleted;
    User.create({
        name: name,
        description: description,
        date: date,
        latitude: latitude,
        longitude: longitude,
        date_deleted: date_deleted
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
};

exports.postDeleteUsers = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const date = req.body.date;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const date_deleted = req.body.date_deleted;
    User.create({
        name: name,
        description: description,
        date: date,
        latitude: latitude,
        longitude: longitude,
        date_deleted: date_deleted
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
};
