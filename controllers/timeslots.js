const timeslotRouter = require("express").Router();
const db = require("../db");

timeslotRouter.get("/", async (req, res) => {
	try {
		const allTimeslots = await db.query("SELECT * FROM timeslot");
		res.json(allTimeslots.rows[0]);
		
	} catch (err) {
		console.error(err.message);
	}
});

module.exports = timeslotRouter;


