'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.use(express.urlencoded({extended : true}));
app.set('view engine', 'ejs');
//const pg = require('pg');  // sql first step in intializing
const superagent = require('superagent');
//const client = new pg.Client(process.env.DATABASE_URL);

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});