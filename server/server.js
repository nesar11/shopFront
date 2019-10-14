const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3001;
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config/DB');
mongoose.Promise = global.Promise;

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('database is connected') },
    err => { console.log('can not connect to the database' + err) }
);


var app = express();

const api = require('./routes/api')
const api2 = require('./routes/api2')
const api3 = require('./routes/api3')
const blogRoute = require('./routes/blogRoute')

app.use(bodyParser.json());
app.use(cors());
app.use('/api', api)
app.use('/api2', api2)
app.use('/blogRoute', blogRoute)
app.use('/api3', api3)

app.use('/api/resgister', api)
app.use('/api2/product', api2)
app.use('/api2/blogRoute', blogRoute)
app.use('/api3/upload', api3)



app.get('/', function (req, res) {
    res.send('Hellow from server')
});
app.listen(PORT, function () {
    console.log('server running on Localhost' + PORT)
});
