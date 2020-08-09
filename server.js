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
const { response, query } = require('express');
//const client = new pg.Client(process.env.DATABASE_URL);

//routes
app.get('/', (req, res) => {
res.render('pages/index');
})

app.get('/search', (req, res) => {
    res.render('pages/searches/new');
});


app.get('/hello', (req, res) => {
    res.render('pages/index');
    })
app.get('/test',(req,res) => {
    let searchType = 'title';
    let keyword = 'harry potter'
    let url = `https://www.googleapis.com/books/v1/volumes?q=in${searchType}:${keyword}}`;
    //let url = `https://www.googleapis.com/books/v1/volumes?q=harry+intitle`;
    superagent.get(url).then(booksData => {
         //console.log(booksData.body.items);
        res.status(200).send(booksData.body.items);
     });

})
app.post('/searches', (req,res) => {
    let searchType = req.body.searchType;
    let searchKeyWord = req.body.searchKeyWord;
    getGoogleBooks(searchType, searchKeyWord).then((returnedBooksData) => {
        console.log(returnedBooksData);
        res.render('pages/searches/show', {booksResult: returnedBooksData});

    })
})
    function getGoogleBooks(searchType, searchKeyWord) {
        
        let url = `https://www.googleapis.com/books/v1/volumes?q=in${searchType}:${searchKeyWord}}`;
        return superagent.get(url).then(data => {
            let bookData= data.body.items.map(Books);
            //console.log(bookData);
            return bookData;
        });
    }

    function Books(booksData) {
        //let weatherArr = [];
        function BookObject(booksData) {
            this.image = booksData.volumeInfo.imageLinks.thumbnail || 'https://i.imgur.com/J5LVHEL.jpg';
            this.title = booksData.volumeInfo.title;
            this.authors = booksData.volumeInfo.authors.join();
            this.description = booksData.volumeInfo.description;
        };
    
        let newObj = new BookObject(booksData);
    
        return newObj;
    };

// error route
    app.get('/*', (req, res) => {
        res.render('pages/error.ejs')
    });

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});