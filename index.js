require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");

// Middlewares
app.use(cors());
app.use(express.json());	// In order to get access to req.body

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
	res.send("<h1>Moin</h1>");
});

app.listen(PORT, () => {
	console.log(`Server is listening to port ${PORT}`);
});