var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var databaseConfig = require('./config/database');
//Set up mongoose connection
var databaseUrl = databaseConfig.dev;
//databaseUrl = 'mongodb://localhost:27017';
var mongoDB = databaseUrl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var teamsRouter = require('./routes/teams');
var attendanceRouter = require('./routes/attendances');
var signinRouter = require('./routes/signin');
var performanceRouter = require('./routes/performance');
var satisfactionRouter = require('./routes/satisfaction');
var promotionRouter = require('./routes/promotion');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/teams', teamsRouter);
app.use('/attendances', attendanceRouter);
app.use('/signin', signinRouter);
app.use('/performance', performanceRouter);
app.use('/satisfaction', satisfactionRouter);
app.use('/promotion', promotionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
