require('dotenv').config('../.env');
const express = require('express');
const middleware = require('../middleware/middleware');
const route = require('../routers/route');
const {notFoundHandler,errorHandler} = require('../error/error');
const myDB = require('../db/db');

const app = express();

myDB.create('user 1',10);
myDB.create('user 2',10);
myDB.create('user 3',10);
myDB.create('user 4',10);
myDB.create('user 5',10);
const bulk = myDB.bulkCreate('test',10,5);
console.log('bulk',bulk);
const ticket = myDB.find();
console.log('All Ticket',ticket);
const winners = myDB.draw(3);
console.log('Winners',winners);

app.use(middleware);
app.use(route);
app.use(notFoundHandler);
app.use(errorHandler);


module.exports = app;