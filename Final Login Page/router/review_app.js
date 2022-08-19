const database = require('../Database_connection/database_handler');
const infoPool = require('../Info/infoPool');
const express = require('express');
const app = express();
const router = express.Router();
app.use(router);

router.route('/:movie_id') // when a client hits /login, come to this router
    .get(async (req, res) => {
        const movie_info = await infoPool.getMovieInfo(req.params.movie_id);
        const cast_info = await infoPool.getCastInfo(req.params.movie_id);
        const latest_reviews = await infoPool.getReview(req.params.movie_id);
        // console.log(cast_info);
        
        res.render('review', {
            movie_info,
            cast_info,
            latest_reviews
        });
    })
    .post(async (req, res) => {

        const user_name = req.body.user_name;
        const movie_name = req.body.movie_name;
        const movie_id = req.body.movie_id;
        const user_rating = req.body.user_rating;
        const user_review = req.body.user_review;

        await infoPool.insertReview(user_name, movie_name, movie_id, user_rating, user_review);

        res.redirect(`/review/${movie_id}`);
    })


module.exports = router;