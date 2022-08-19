const infoPool = require('../Info/infoPool');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const router = express.Router();
app.use(router);

router.route('/') // when a client hits /login, come to this router 
    .get((req, res) => {
        res.render('login_page', {
            message: ''
        });
    })
    .post(async (req, res) => {

    console.log('In post method');
    const email = req.body.email;
    const pass = req.body.pass;

    console.log(email + ' ' + pass);

    const data = (await infoPool.getUserInfo(email, pass));

    try {

        bcrypt.compare (pass, data[0].PASS, (err, result) => {
        if (result == true) { // user provided correct credentials
            req.session.validUser = true;
            req.session.email = email;
            
            res.redirect('/home');
        }
        else {
            return res.render('login_page', {
                message: 'Incorrect Email or Password'
            });
            }
        })
    } catch {
        console.log('Error in loggin in!!');
    }
    
    });


module.exports = router;