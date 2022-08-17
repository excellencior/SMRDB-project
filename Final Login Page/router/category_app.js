const express = require('express');
const app = express();
const router = express.Router();
app.use(router);

router.route('/')
    .get((req, res) => {
        res.render('category');
    })
    .post((req, res) => {
        res.redirect(307, '/genre') // as the selecting options of home_page -> genre are in post method
        // code: 307 redirects to the same method (post)
    });

module.exports = router;