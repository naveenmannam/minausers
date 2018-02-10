const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5050;
const app = express();

const routes = require('./routes/users');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes)
app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Express on ${port}`);
})