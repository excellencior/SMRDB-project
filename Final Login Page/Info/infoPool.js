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
    let sql = 'SELECT * FROM ms_carousel';

    return (await database.execute(sql, [], database.options)).rows;
}

async function aboutSM() {
    let sql = `SELECT title, plot, runtime, posterUrl,trailer_link FROM movie_list FETCH NEXT 10 ROWS ONLY`;
        
    return (await database.execute(sql, [], database.options)).rows;
}

async function getReview(movie_id){

    let sql = 'SELECT * FROM REVIEW_TABLE WHERE MOVIE_ID = :movie_id'

    let binds ={
        movie_id: movie_id
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
    let sql = 'SELECT * FROM REVIEW_TABLE ORDER BY REVIEW_ID DESC FETCH NEXT 10 ROWS ONLY';

    return (await database.execute(sql, [], database.options)).rows;
}

async function insertReview(user_name, movie_name, movie_id, user_rating, user_review){
    let sql = 'INSERT INTO REVIEW_TABLE(REVIEW_ID, USER_NAME, MOVIE_NAME, MOVIE_ID, USER_RATING, USER_REVIEW, TIME) VALUES (0, :user_name, :movie_name, :movie_id, :user_rating , :user_review, SYSDATE)'

    let binds = {
        user_name : user_name,
        movie_name : movie_name,
        movie_id : movie_id,
        user_rating : user_rating,
        user_review : user_review
    }
    console.log(user_name, movie_name, movie_id, user_rating);

    await database.execute(sql, binds, database.options);
}

async function getUserInfo(email, pass) {
    let sql = `SELECT first_name, email, pass FROM user_login WHERE email = :email`;

    return (await database.execute(sql, [email], database.options)).rows;
}

async function getMovieInfo(movie_id) {
    let sql = 'SELECT * from movie_list WHERE movie_id = :movie_id';

    const binds = {
        movie_id : movie_id
    }

    return (await database.execute(sql, binds, database.options)).rows;
}

async function getCastInfo(movie_id){
    let sql = `SELECT A.ACTOR_NAME,M.MOVIE_ID 
    FROM ACTORS A,MOVIE_LIST M
    WHERE INSTR(M.ACTORS,A.ACTOR_NAME)>0 AND M.MOVIE_ID = :movie_id`

    let binds = {
        movie_id : movie_id
    }

    return (await database.execute (sql, binds ,database.options)).rows;
}

module.exports = {  auth_user, 
                    topRatedSM, 
                    sampleCarousel, 
                    aboutSM, 
                    getReview, 
                    insertReview,
                    getGenreInfo,
                    getLatestReviews,
                    getUserInfo,
                    getMovieInfo,
                    getCastInfo
                };