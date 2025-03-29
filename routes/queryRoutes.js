const express = require("express");
const authenticate = require("../middleware/authMiddleware");
const validateQuery = require("../middleware/validation");
const { convertToSQL, executeSQL, explainQuery } = require("../services/queryService");

const router = express.Router();

// Process natural language query
router.post("/", authenticate, (req, res) => {
    const { question } = req.body;

    const validation = validateQuery(question);
    if (!validation.isValid) {
        return res.status(400).json({ error: validation.error });
    }

    const sql = convertToSQL(question);
    if (sql === "Unsupported query") {
        return res.status(400).json({ error: "Query not supported" });
    }

    executeSQL(sql, (mockData) => {
        res.json({ query: sql, result: mockData });
    });
});

// Explain how the query was converted
router.post("/explain", authenticate, (req, res) => {
    const { question } = req.body;
    const explanation = explainQuery(question);
    
    if (!explanation) {
        return res.status(400).json({ error: "Query explanation not available" });
    }

    res.json(explanation);
});

// Validate query feasibility
router.post("/validate", authenticate, (req, res) => {
    const { question } = req.body;
    const validation = validateQuery(question);

    res.json(validation);
});

module.exports = router;
