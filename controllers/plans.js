const planRouter = require("express").Router();
const db = require("../db");
const logger = require("../utils/logger");

// Create a plan
planRouter.post("/", async (req, res) => {
	try {
		const { title, description, starting, ending } = req.body;
		const newPlan = await db.query(
			"INSERT INTO plan (title, description, starting, ending) VALUES ($1, $2, $3, $4) RETURNING *",
			[ title, description, starting, ending ]
		);
		res.json(newPlan.rows[0]);
	} catch (err) {
		logger.error(err.message);
	}
});


// Get all plans
planRouter.get("/", async (req, res) => {
	try {
		const allPlans = await db.query("SELECT * FROM plan");
		res.json(allPlans.rows);
		
	} catch (err) {
		logger.error(err.message);
	}
});

// Get a single plan
planRouter.get("/:id", async (req, res) => {
	try {
		const { id } = req.params; 
		const plan = await db.query(
			"SELECT * FROM plan WHERE id = $1",
			[id]
		);
		res.json(plan.rows[0]);
	} catch (err) {
		logger.error(err.message);
	}
});

// Update a single plan
planRouter.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { title, description, starting, ending } = req.body;

		const updatedPlan = await db.query(
			"UPDATE plan SET title = $1, description = $2, starting = $3, ending = $4 WHERE id = $5 RETURNING *",
			[ title, description, starting, ending, id ]
		);

		res.status(200).json(updatedPlan.rows[0]);

	} catch (err) {
		logger.error(err.message);
	}
});

// Delete a plan
planRouter.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		await db.query("DELETE FROM plan WHERE id = $1", [id]);
		res.status(204).end();
	} catch (err) {
		logger.error(err.message);
	}
});

module.exports = planRouter;


