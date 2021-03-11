const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
<<<<<<< HEAD
const app = express();


// MONGO CONNECTION
mongoose.set('useCreateIndex', true);
var connectionString = "mongodb+srv://dbuser:Password1!@bb-menu-items.kuzfo.mongodb.net/menuItems?retryWrites=true&w=majority";
=======
const bodyParser = require('body-parser')
const app = express();

// MONGO CONNECTION
var connectionString = "mongodb+srv://dbuser:Password1@bb-menu-items.kuzfo.mongodb.net/<dbname>.menu?retryWrites=true&w=majority";
>>>>>>> a0efbc93939e95c23ab01f5f33dab1001d56ad80
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(){
    console.log("database is connected")
})

//IMPORT ROUTES
var indexRouter = require('./routes/index');
<<<<<<< HEAD
var usersRouter = require('./routes/users');
var itemsRoute = require('./routes/items');


app.use('/items', itemsRoute);
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
=======
var itemsRoute = require('./routes/items');
var usersRouter = require('./routes/users');




>>>>>>> a0efbc93939e95c23ab01f5f33dab1001d56ad80

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
=======
app.use(bodyParser.json());

app.use('/items', itemsRoute);
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
>>>>>>> a0efbc93939e95c23ab01f5f33dab1001d56ad80

app.listen(5000);


module.exports = app;
