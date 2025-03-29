const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const SECRET_KEY = "e8f6b9a2d4c3e1f5a7b8d9c0e2f4a6b3";

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "password") {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
        return res.json({ token });
    }

    res.status(401).json({ error: "Invalid credentials" });
});

module.exports = router;
