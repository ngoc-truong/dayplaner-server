// Our actual backend app
const express = require("express");
const app = express();
const cors = require("cors");
const planRouter = require("./controllers/plans");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

logger.info("Connecting to the database");

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

// Controllers/Routes
app.use("/api/plans", planRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;


