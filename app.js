const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();


// MONGO CONNECTION
mongoose.set('useCreateIndex', true);
var connectionString = "mongodb+srv://dbuser:Password1!@bb-menu-items.kuzfo.mongodb.net/menuItems?retryWrites=true&w=majority";
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(){
    console.log("database is connected")
})

//IMPORT ROUTES
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itemsRoute = require('./routes/items');


app.use('/items', itemsRoute);
app.use('/', indexRouter);
app.use('/api/users', usersRouter);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000);


module.exports = app;
