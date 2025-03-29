const db = require("../config/database");

const convertToSQL = (query) => {
    query = query.toLowerCase().replace(/\s+/g, " ").trim(); // Normalize query

    // Match "users age greater than <number>"
    if (/users.*age.*greater.*than.*\b(\d+)\b/.test(query)) {
        const age = query.match(/users.*age.*greater.*than.*\b(\d+)\b/)[1];
        console.log("Extracted age:", age); // Debugging
        return `SELECT * FROM users WHERE age > ${age}`;
    }

    // Match "all users"
    else if (/all users/.test(query)) {
        return "SELECT * FROM users";
    }

    // Match "users age less than <number>"
    else if (/users.*age.*less.*than.*\b(\d+)\b/.test(query)) {
        const age = query.match(/users.*age.*less.*than.*\b(\d+)\b/)[1];
        console.log("Extracted age:", age); // Debugging
        return `SELECT * FROM users WHERE age < ${age}`;
    }

    // Match "users from <city> or <city>"
    else if (/users.*from\s+(.+)/.test(query)) {
        const cities = query.match(/users.*from\s+(.+)/)[1]
            .split(/\s+or\s+/) // Split by "or" with spaces around it
            .map(city => city.trim().toLowerCase()); // Trim and normalize each city
        console.log("Extracted cities:", cities); // Debugging
        const cityConditions = cities.map(city => `LOWER(city) = LOWER('${city}')`).join(" OR ");
        return `SELECT * FROM users WHERE ${cityConditions}`;
    }

    return "Unsupported query";
};

const executeSQL = (sql, callback) => {
    db.all(sql, [], (err, rows) => {
        if (err) {
            callback([]);
        } else {
            callback(rows);
        }
    });
};

const explainQuery = (query) => {
    const sql = convertToSQL(query);
    if (sql === "Unsupported query") {
        return null;
    }

    return {
        originalQuery: query,
        sqlTranslation: sql,
        explanation: `This query retrieves data from the 'users' table based on the given conditions.`
    };
};

module.exports = { convertToSQL, executeSQL, explainQuery };
