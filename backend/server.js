const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

const bicycleRoutes = require("./routes/bicycleRoutes");
const userRoutes = require("./routes/userRoute");

const jwt = require("jsonwebtoken");

const app = express();
dotenv.config();
connectDB();

/*
dot env structure:
-create .env file in root

add the following for now:

MONGODB_URI = "mongodb+srv://Insti-Cycle-Mela:wNpdsHJWBFBL6j8g@cluster0.wsm5f91.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
PORT= 8080
//for cloudinary temporary we can use mine:
CLOUDINARY_NAME = "dv9m6ghqf"
CLOUDINARY_API_KEY = "662459726783117"
CLOUDINARY_API_SECRET = "_NZ2ICVhLUOGkr5_8ooLylBhekE"

to run use : npm run dev

*/

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Is Running");
});
app.post("/api/bicycles", (req, res) => {
  res.status(200).send("Bicycle data received");
});
// Routes
app.use("/api", bicycleRoutes);
app.use("/api/auth", userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
