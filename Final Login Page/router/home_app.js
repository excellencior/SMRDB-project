const database = require('../Database_connection/database_handler');
const infoPool = require('../Info/infoPool');
const express = require('express');
const app = express();
const router = express.Router();
app.use(router);

router.route('/') // when a client hits /login, come to this router 
    .get(async (req, res) => {
        // loading the home carousel
        let ms_data = (await infoPool.sampleCarousel());
        let ms_line = (await infoPool.topRatedSM());

        // console.log(ms_data);
        const data_Homepage = {ms_data, ms_line};
        
        res.render('home_page', {
            message :'',
            data_Homepage
        }); // we can now fetch this data from ejs file
    })
    .post((req, res) => {
        res.redirect(307, '/genre') // as the selecting options of home_page -> genre are in post method
        // code: 307 redirects to the same method (post)
    });


module.exports = router;