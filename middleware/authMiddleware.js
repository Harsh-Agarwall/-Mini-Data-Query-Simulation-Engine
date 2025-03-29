const jwt = require("jsonwebtoken");
const SECRET_KEY = "e8f6b9a2d4c3e1f5a7b8d9c0e2f4a6b3";

const authenticate = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({ error: "No token provided" });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(500).json({ error: "Failed to authenticate token" });
        req.user = decoded;
        next();
    });
};

module.exports = authenticate;
