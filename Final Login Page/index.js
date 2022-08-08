const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const login_router = require('./router/login_app');
const signup_router = require('./router/signup_app');

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

// for login page
app.use('/static_login', express.static(__dirname + '/public/login', {
    index: 'login_page.html'
}));
// for signup page
app.use('/static_signup', express.static(__dirname + '/public/signup', {
    index: 'signup_page.html'
}));

app.use(bodyparser.urlencoded({
    extended : true
}));

app.use('/login', login_router); // when in /login => go to subapp login_router
app.use('/signup', signup_router); // when in /signup => go to signup_router

app.listen(3000, ()=> {
    console.log("Listening on server: 3000");
});