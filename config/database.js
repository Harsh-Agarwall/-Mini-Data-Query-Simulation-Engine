const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, city TEXT)");
    db.run(`INSERT INTO users (name, age, city) VALUES 
        ('Alice', 25, 'New York'), 
        ('Bob', 30, 'Los Angeles'), 
        ('Charlie', 35, 'Chicago'), 
        ('David', 40, 'Houston'),
        ('Eve', 22, 'San Francisco'),
        ('Frank', 29, 'Seattle'),
        ('Grace', 33, 'Miami'),
        ('Hank', 27, 'Boston'),
        ('Ivy', 31, 'Denver'),
        ('Jack', 45, 'Atlanta')
    `);
});

module.exports = db;
