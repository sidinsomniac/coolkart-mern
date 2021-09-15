const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const categoryRoute = require("./routes/category");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");

const { MONGODB_URI } = require("./utils/config");
const logger = require("./utils/logger");
const middlewares = require("./utils/middleware");

const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/category", categoryRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        logger.info("MongoDB connected");
    }).catch(err => {
        logger.error(err);
    });

app.use(middlewares.handleError);

module.exports = app;