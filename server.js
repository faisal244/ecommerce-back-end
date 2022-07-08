const express = require("express");
const routes = require("./src/routes");
const connection = require("./src/config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then initialise the server
const init = async () => {
	try {
		// force = true will reset and erase all data from database, force = false will leave existing data in place
		await connection.sync({ force: false });

		app.listen(PORT, () =>
			console.log(`Server running on http://localhost:${PORT}`)
		);
	} catch (error) {
		console.log(`[ERROR]: Connection to DB failed - ${error.message}`);
	}
};

init();
