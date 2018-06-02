var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session")

// Ladataan Passport ja sen Local Strategia
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Ladataan käyttäjien malli
var User = require('./models/model.js').User;

// Luodaan strategia joka hakee kannasta käyttäjän ja vertaa salasanaa,
// jos salasana on sama, käyttäjä on autentikoitunut
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({username: username}).then(function (u) {
            if (u && u.password === password) {
                return done(null, u);
            }
            else {
                return done(null, false);
            }
        });
    }));

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// Sarjallistetaan käyttäjän tietokanta id sessioon
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

// muunnetaan sessiossa oleva tietokanta id käyttäjäksi
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Käytetään sessioita sovelluksessa
app.use(session({ secret: "cats" , resave: false,
    saveUninitialized: true}));

// alusteteaan passport käyttämään sovelluksen sessioita
// sessiot pitää olla käytössä ennen tätä
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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
