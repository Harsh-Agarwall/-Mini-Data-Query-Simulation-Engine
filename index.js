const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const queryRoutes = require("./routes/queryRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/query", queryRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
