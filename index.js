// File: pb-server/index.js
// Programmer: Mya Nanthavongdouangsy
//=================================================================
// Entry point for PeerBox Server
// Runs on port 8888
//=================================================================
require('dotenv').config(); // Load Environment Variables from .env
const express = require('express');
const mysql = require('mysql2/promise');
const helmet = require('helmet');
const cors = require('cors');

// Import routes

// Server Configs
const app = express();
const HOST = 'localhost';
const PORT = process.env.PORT || 8888; // Server port
let db;

// Setup database connection
(async() => {
	try {
		db = await mysql.createConnection({
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME
		});
		
		console.log('Connected to Amazon RDS: pb-rds-database');
	} catch (err) {
		console.error('Error connecting to database:', err);
	}
})();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Starter Endpoint
app.get('/', (req, res) => {
	res.json("Welcome to the PeerBox Server!");
})

// Routes

// Start Server
app.listen(PORT, () => {
	console.log(`Server is running at http://${HOST}:${PORT}`);
});

//module.exports = app;




