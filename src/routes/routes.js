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
        res.status(500).send("Internal server error");
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
            break;
    }
    if (!entry) {
        res.status(500).send("Internal server error");
    }
    res.status(200).json(entry);
});

//GET - All the quotes
router.get('/quotes', (req, res) => {
    const entry = data;
    if (!entry) {
        res.status(500).send("Internal server error");
    }
    res.status(200).json(entry);
});

//GET - Random quote
router.get('/quotes/random', (req, res) => {
    const random = Math.floor(Math.random() * NUMBER_OF_ENTRIES);
    console.log(`TOTAL QUOTES: ${NUMBER_OF_ENTRIES}`);
    console.log(`N° OF QUOTE: ${random}`);
    const entry = data[random];
    if (!entry) {
        res.status(500).send("Internal server error");
    }
    res.status(200).json(entry);
});

//GET - Random quote in a specific language
router.get('/quotes/random/:lang', (req, res) => {
    const random = Math.floor(Math.random() * NUMBER_OF_ENTRIES);
    let entry = null;
    console.log(`TOTAL QUOTES: ${NUMBER_OF_ENTRIES}`);
    console.log(`N° OF QUOTE: ${random}`);
    switch (req.params.lang) {
        case "en":
        case "es":
            entry = data[random].quote[req.params.lang];
            res.status(200).json(entry);
            break;
        default:
            res.status(500).send("Internal server error");
            break;
    }
});

module.exports = router;