const express = require('express');
const cors = require('cors');

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(logger);
app.use(cors());

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.use(errorHandler);

module.exports = app;