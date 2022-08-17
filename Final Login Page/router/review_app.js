const database = require('../Database_connection/database_handler');
const infoPool = require('../Info/infoPool');
const express = require('express');
const app = express();
const router = express.Router();
app.use(router);

router.route('/') // when a client hits /login, come to this router
    .get(async (req, res) => {
        res.render('review');
    })
    .post(async (req, res) => {

        const user_name = req.body.;
        const movie_name = req.body;
        const rating = req.body;
        const 
        
        infoPool.insertReview(0, user_name);
    })


module.exports = router;