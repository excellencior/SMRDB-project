const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const session = require('express-session');
const login_router = require('./router/login_app');
const signup_router = require('./router/signup_app');
const homepage_router = require('./router/home_app');
const blog_router = require('./router/blog_app');
const category_router = require('./router/category_app');
const about_router = require('./router/about_app');
const single_review_router = require('./router/review_app');
const genre_router = require('./router/genre_app');
const logout_router = require('./router/logout');

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

// for login page
app.use('/static_login', express.static(__dirname + '/public/login'));
// for signup page
app.use('/static_signup', express.static(__dirname + '/public/signup'));
// for home page
app.use('/static_home', express.static(__dirname + '/public/homepage'));

app.use(bodyparser.urlencoded({
    extended : true
}));

app.use(session ({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/login', login_router); // when in /login => go to subapp login_router
app.use('/signup', signup_router); // when in /signup => go to signup_router
app.use('/logout', logout_router);
app.use('/home', homepage_router);
app.use('/blog', blog_router);
app.use('/category', category_router);
app.use('/about', about_router);
app.use('/genre', genre_router);
app.use('/review', single_review_router);

app.listen(3000, ()=> {
    console.log("Listening on server: 3000");
});