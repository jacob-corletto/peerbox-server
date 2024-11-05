// File: pb-server/index.js
// Programmer: Mya Nanthavongdouangsy
//=================================================================
// Entry point for PeerBox Server
// Runs on port 8888
//=================================================================
const express = require('express');
require('dotenv').config(); // Load Environment Variables from .env
const mysql = require('mysql/promise');

// Import routes here

// Server connection port
const HOST = 'localhost';
const PORT = 8888;

// Server Initialization
const app = express();

// Middleware
app.use(express.json());

// Database Connection Setup
(async () => {
	try {
        	const db = await mysql.createConnection({
			host: process.env.RDS_HOST,
			user: process.env.RDS_USER,
			password: process.env.RDS_PASSWORD,
			database: process.env.RDS_NAME
		});

		console.log("Successful connection to Amazon RDS:  pb-rds-database");

		// Starter Endpoint
		app.get("/", (req, res) => {
        		res.json("Welcome to the PeerBox Server!");
		});
		
		// Future Routes here

		// Start Server
		app.listen(PORT, () => {
        		console.log(`Server is running at http://${HOST}:${PORT}`);
		});
	} catch (err) {

		console.error("Error connecting to the database:", err);
	}
})();

//module.exports = app;




