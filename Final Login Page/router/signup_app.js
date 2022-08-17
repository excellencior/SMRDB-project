const insert = require('../Database_connection/database_handler');
const infoPool = require('../Info/infoPool');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const router = express.Router();
app.use(router);

router.route('/') // when a client hits /login, come to this router 
    .get((req, res) => {
        res.render('signup_page', {
            message: ''
        });
    })
    .post(async (req, res) => {
    const first_name = req.body.first_name ;
    const last_name = req.body.last_name;
    let pass = req.body.pass;
    const bday = req.body.bday;
    const email = req.body.email;
    const phone_number = req.body.phone_number;

    bcrypt.hash (pass, 10, (err, hash) => {
        pass = hash;
    });

    console.log('pass: ', pass);

    const user_info = await infoPool.auth_user(email);
    let userExits = user_info.length == 0 ? false : true; // email is being used by another user

    if (userExits) {
        return res.render('signup_page', {
            message: 'User already exists with this email'
        });
    }
    if (!email || !pass) {
        return res.render('signup_page', {
            message: 'Please fill in the required fields'
        })
    }

    console.log(first_name + ' ' + last_name);

    const sql = 'INSERT INTO USER_LOGIN VALUES( :first_name, :last_name, :pass, :bday, :email, :phone_number)';

    const binds = {
        first_name : first_name,
        last_name : last_name,
        pass : pass,
        bday : bday,
        email : email,
        phone_number : phone_number,
    }

    insert.execute(sql, binds, insert.options); // inserting data into user_login

    res.redirect('/home');
    });


module.exports = router;