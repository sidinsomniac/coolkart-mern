const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const { MONGODB_URI } = require("./utils/config");
const logger = require("./utils/logger");

const app = express();

app.use(express.json());

app.use("/user", userRoutes);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        logger.info("MongoDB connected");
    }).catch(err => {
        logger.error(err);
    });

module.exports = app;