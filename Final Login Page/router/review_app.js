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
        
    })


module.exports = router;