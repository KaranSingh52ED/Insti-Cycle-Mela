const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const bicycleRoutes = require("./routes/bicycleRoutes");

const app = express();
connectDB();

/*
dot env structure:
-create .env file in root

add the following for now:

MONGODB_URI = "mongodb+srv://Insti-Cycle-Mela:wNpdsHJWBFBL6j8g@cluster0.wsm5f91.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
PORT= 8080


to run use : npm run dev

*/

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", bicycleRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
