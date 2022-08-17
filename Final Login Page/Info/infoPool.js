const database = require('../Database_connection/database_handler');

async function topRatedSM() {
    let sql = 
    `SELECT title, plot, runtime, posterUrl FROM movie_list ORDER BY RATING DESC FETCH NEXT 10 ROWS ONLY`;
    
    return (await database.execute(sql, [], database.options)).rows;
}

async function auth_user(email) {
    let sql = `SELECT first_name, email, pass FROM user_login WHERE email = :email`;

    let user = (await database.execute(sql, [email], database.options)).rows;
    return user;
}

async function sampleCarousel() {
    let sql = 'SELECT title, description, img_path FROM ms_carousel';

    return (await database.execute(sql, [], database.options)).rows;
}

async function aboutSM() {
    let sql = `SELECT title, plot, runtime, posterUrl,trailer_link FROM movie_list FETCH NEXT 10 ROWS ONLY`;
        
    return (await database.execute(sql, [], database.options)).rows;
}

async function get_Review(user_name,movie_name){

    let sql = 'SELECT USER_NAME, MOVIE_NAME FROM REVIEW_TABLE WHERE USER_NAME = :user_name AND MOVIE_NAME = :movie_name'

    let binds ={

        user_name : user_name,
        movie_name : movie_name
    }
    
    return (await database.execute(sql, binds, database.options)).rows;
}

async function getGenreInfo(genre) {
    let sql = `SELECT * FROM movie_list WHERE genres LIKE :genre`;

    let binds = {
        genre: `%${genre}%`
    }

    return (await database.execute(sql, binds, database.options)).rows;
}

async function getLatestReviews() {
    let sql = 'SELECT user_name, movie_name, user_review FROM REVIEW_TABLE';

    return (await database.execute(sql, [], database.options)).rows;
}

async function getUserInfo(email, pass) {
    let sql = `SELECT first_name, email, pass FROM user_login WHERE email = :email`;

    return (await database.execute(sql, [email], database.options)).rows;
}

module.exports = {  auth_user, 
                    topRatedSM, 
                    sampleCarousel, 
                    aboutSM, 
                    get_Review, 
                    getGenreInfo,
                    getLatestReviews,
                    getUserInfo
                };