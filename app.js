// dependences
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const bucketlist = require('./controller/bucketlist.js')

// connect with database
mongoose.connect(config.database);
// declaring port 
const port = 3000;

// initialize app variable
const app = express();
// middleware for CORS
app.use(cors());
// Middleware for bodyparsing using json and urlencoding
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// sever static files
app.use(express.static(path.join(__dirname, 'public')));
// routes
app.get('/', (req, res)=>{
    res.send('Invalid Page');
})
// app.use('/bucketlist', bucketlist);
// listen to port 3000
app.listen(port, ()=>{
    console.warn(`Starting the server at port ${port}`);
})