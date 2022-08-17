const database = require('../Database_connection/database_handler');
const infoPool = require('../Info/infoPool');
const express = require('express');
const app = express();
const router = express.Router();
app.use(router);

router.route('/') // when a client hits /login, come to this router
    .get(async (req, res) => {
        let ms_line = (await infoPool.aboutSM());

        res.render('genre', {
            ms_line
        });
    })
    .post(async (req, res) => {
        let genre = req.body.genre;
        // console.log(genre);
        let ms_line = await infoPool.getGenreInfo(genre);

        return res.render('genre', {
            ms_line
        })
    })


module.exports = router;