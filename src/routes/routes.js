'use strict';
const { Router } = require("express");
const data = require("../../data/quotes.json");

const router = Router();
const NUMBER_OF_ENTRIES = Object.keys(data).length;

//GET - Today's quote (default)
router.get('/quote', (req, res) => {
    const today = new Date().toLocaleDateString(undefined, {
        day: "numeric",
    });
    console.log(`Today is: ${today}`);
    const entry = data[today];
    if (!entry) {
        res.status(500).send("Error 500 - Internal server error");
    }
    res.status(200).json(entry);
});

//GET - Today's quote in a specific language
router.get('/quote/:lang', (req, res) => {
    const today = new Date().toLocaleDateString(undefined, {
        day: "numeric",
    });
    console.log(`Today is: ${today}`);
    let entry = null;
    switch (req.params.lang) {
        case "en":
        case "es":
            entry = data[today].quote[req.params.lang];
            break;
        default:
            res.status(404).send("Error 404 - Wrong request. Please check the url path");
            break;
    }
    if (!entry) {
        res.status(500).send("Error 500 - Internal server error");
    }
    res.status(200).json(entry);
});

//GET - All the quotes
router.get('/quotes', (req, res) => {
    const entry = data;
    if (!entry) {
        res.status(500).send("Error 500 - Internal server error");
    }
    res.status(200).json(entry);
});

//GET - Random quote
router.get('/quotes/random', (req, res) => {
    const random = Math.floor(Math.random() * NUMBER_OF_ENTRIES);
    console.log(`N° of random quote: ${random}`);
    const entry = data[random];
    if (!entry) {
        res.status(500).send("Error 500 - Internal server error");
    }
    res.status(200).json(entry);
});

//GET - Random quote in a specific language
router.get('/quotes/random/:lang', (req, res) => {
    const random = Math.floor(Math.random() * NUMBER_OF_ENTRIES);
    let entry = null;
    console.log(`N° of random quote: ${random}`);
    switch (req.params.lang) {
        case "en":
        case "es":
            entry = data[random].quote[req.params.lang];
            break;
        default:
            res.status(404).send("Error 404 - Wrong request. Please check the url path");
            break;
    }
    if(!entry){
        res.status(500).send("Error 500 - Internal server error");
    }
    res.status(200).json(entry);
});

//GET - Generic 404
router.get('/*', (req, res) => {
    res.status(404).send("Error 404 - Wrong request. Please check the url path");
});

module.exports = router;