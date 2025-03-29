# 🚀 Gen AI Query API

## 📌 Overview
Gen AI Query API is a RESTful backend service that simulates an AI-powered data query system. It allows users to retrieve information from a **mock database** using **natural language queries**.

### ✅ Features
- Converts **natural language queries** into **pseudo-SQL**
- Returns **mock database responses** for various queries
- Implements **JWT authentication** for secured endpoints
- Provides **error handling** and **query validation**
- Supports **Postman collection** for easy testing

---

## 📂 Project Structure
```
Gen-AI-Query-API/
│── src/
│   ├── config/
│   │   ├── database.js        # SQLite in-memory database setup
│   │   ├── auth.js            # JWT authentication logic
│   ├── controllers/
│   │   ├── queryController.js # Handles query processing
│   │   ├── authController.js  # Handles user authentication
│   ├── routes/
│   │   ├── queryRoutes.js     # API routes for queries
│   │   ├── authRoutes.js      # API routes for authentication
│   ├── middleware/
│   │   ├── authMiddleware.js  # Middleware for authentication
│   ├── utils/
│   │   ├── queryParser.js     # Converts NL queries to SQL
│   ├── app.js                 # Main Express app
│── .env                        # Environment variables
│── package.json                # Dependencies and scripts
│── README.md                   # Documentation
│── Postman_Collection.json      # Postman collection for testing
```

---

## 🛠️ Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/Gen-AI-Query-API.git
cd Gen-AI-Query-API
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root folder and add:
```
SECRET_KEY=your_secret_key
PORT=3000
```

### 4️⃣ Start the Server
```sh
npm start
```

Server will start on `http://localhost:3000`

---

## 🔐 Authentication
This API requires a **JWT token** for secured endpoints. 

### 🔑 Generate Token (Login)
#### Endpoint: `POST /auth/login`
**Request:**
```json
{
  "username": "admin",
  "password": "password"
}
```
**Response:**
```json
{
  "token": "your_generated_jwt_token"
}
```

Use this token in the `Authorization` header for secured requests.

---

## 🌍 API Endpoints

### 📌 1️⃣ Authenticate & Get Token
#### `POST /auth/login`
- **Description:** Returns a JWT token after successful authentication.

### 📌 2️⃣ Query Processing
#### `POST /query`
- **Description:** Converts a natural language query into **pseudo-SQL** and returns mock data.  

✅ **Request Example**:
```json
{
  "question": "Get all users older than 25"
}
```
✅ **Response**:
```json
{
  "query": "SELECT * FROM users WHERE age > 25",
  "result": [
    {"id": 3, "name": "Charlie", "age": 35, "city": "Chicago"},
    {"id": 4, "name": "David", "age": 40, "city": "Houston"}
  ]
}
```

### 📌 3️⃣ Query Explanation
#### `POST /explain`
- **Description:** Breaks down the natural language query into its components.  

✅ **Request:**
```json
{
  "question": "Get users from New York"
}
```
✅ **Response:**
```json
{
  "query": "SELECT * FROM users WHERE city = 'New York'",
  "explanation": "Fetching all users who live in New York."
}
```

### 📌 4️⃣ Query Validation
#### `POST /validate`
- **Description:** Checks if the query is valid and safe to execute.  

✅ **Request:**
```json
{
  "question": "Delete all users"
}
```
✅ **Response:**
```json
{
  "valid": false,
  "error": "Possible SQL Injection detected."
}
```

---

## 🧪 Testing with Postman
- Import the **Postman_Collection.json** file into Postman.
- **Step 1:** Authenticate using `/auth/login` to get a token.
- **Step 2:** Use the token in the **Authorization** header.
- **Step 3:** Test queries using `/query`, `/explain`, and `/validate`.

---

## 🚀 Deployment
- **Render**: `https://mini-data-query-simulation-engine-4t04.onrender.com`

### 🔧 Deployment Steps
1. Push code to **GitHub**.
2. Link GitHub repository to **Render/Heroku/Railway**.
3. Deploy and test the API.

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
- Fork the repository.
- Create a new branch (`feature-branch`).
- Commit your changes.
- Open a pull request.

---

## ❓ Issues & Support
For any issues, report them in the [GitHub Issues](https://github.com/yourusername/Gen-AI-Query-API/issues) section.

---

## 📩 Contact
For any inquiries, reach out at **harsh.code0@gmail.com**.
