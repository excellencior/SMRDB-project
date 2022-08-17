const database = require('../Database_connection/database_handler');
const infoPool = require('../Info/infoPool');
const express = require('express');
const app = express();
const router = express.Router();
app.use(router);

router.route('/') // when a client hits /login, come to this router
    .get(async (req, res) => {
        let latest_reviews = await infoPool.getLatestReviews();
        // console.log(latest_reviews);

        res.render('latest_reviews_page', {
            latest_reviews
        });
    })
    .post(async (req, res) => {
        
    })


module.exports = router;