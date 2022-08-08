const insert = require('../Database_connection/insert');
const express = require('express');
const app = express();
const router = express.Router();
app.use(router);

router.route('/') // when a client hits /login, come to this router 
    .get((req, res) => {
        res.render('login_page');
    })
    .post((req, res) => {

    console.log('In post method');
    const username = req.body.username ;
    const pass = req.body.pass;

    console.log(username + ' ' + pass);

    const sql = 'INSERT INTO USER_LOGIN VALUES( :username, :pass)';

    const binds = {
        pass : pass,
        username : username
    }

    insert(sql,binds);

    res.send('Inserted');
    
    });


module.exports = router;