const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;

// Pool PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Middleware CORS
app.use(cors({
  origin: "*", // Render + Frontend distant
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

// Route test
app.get("/api", (req, res) => {
  res.json({
    message: "Hello from Backend!",
    timestamp: new Date().toISOString(),
    client: req.get("Origin") || "unknown",
    success: true,
  });
});

// Route DB
app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json({
      message: "Data from Database",
      data: result.rows,
      timestamp: new Date().toISOString(),
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Database error",
      error: err.message,
      success: false,
    });
  }
});

// Démarrage serveur
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});

