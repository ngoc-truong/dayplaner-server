// Our actual backend app
const express = require("express");
const app = express();
const cors = require("cors");
const timeslotRouter = require("./controllers/timeslots");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

logger.info("Connecting to the database");

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

// Controllers/Routes
app.use("/api/timeslots", timeslotRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;


