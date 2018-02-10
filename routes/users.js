const express = require('express');
const router = express.Router();

const db = require('../models/');

router.get('/api', (req, res) => {
    db.User.find()
    .then(function(data){
        res.json(data)
    })
    .catch(function(err){
        res.send(err)
    })
})

router.post('/api', (req, res) => {
    console.log(req.body);
    db.User.create(req.body)
    .then(function(data){
        // res.json(data)
        res.render('index.ejs')
    })
    .catch(function(err){
        res.send(err)
    })
})


module.exports = router;