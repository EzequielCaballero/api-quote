'use strict';
const express = require("express");
const routes = require("./routes/routes");
const serverless = require("serverless-http");

const app = express();

app.use(`/.netlify/functions/api`, routes);

module.exports = app;
module.exports.handler = serverless(app);