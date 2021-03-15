const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");

// MONGO CONNECTION
const connectionString = "mongodb+srv://dbuser:Password12@bb-menu-items.kuzfo.mongodb.net/menuItems?retryWrites=true&w=majority";
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(){
    console.log("database is connected")
});

//IMPORT ROUTES
var indexRouter = require('./routes/index');
var itemsRoute = require('./routes/items');
var usersRouter = require('./routes/users');
var cartRouter = require('./routes/cart');





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/items', itemsRoute);
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/cart', cartRouter);

app.listen(3000);


module.exports = app;
