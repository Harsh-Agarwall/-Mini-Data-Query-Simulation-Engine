const validateQuery = (query) => {
    if (!query || typeof query !== "string") {
        return { isValid: false, error: "Invalid query format" };
    }

    if (/\b(DROP|DELETE|INSERT|UPDATE|ALTER|EXEC)\b/i.test(query)) {
        return { isValid: false, error: "Possible SQL Injection detected" };
    }

    if (!/users/i.test(query)) {
        return { isValid: false, error: "Query must refer to 'users' dataset" };
    }

    return { isValid: true };
};

module.exports = validateQuery;
