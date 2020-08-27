const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const practicesRouter = require("./routes/practices");

require("dotenv").config();

const uri = process.env.ATLAS_URI;

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  // run this when connected
  console.log("MongoDB connection established successfully");
});

app.use("/users", usersRouter);
app.use("/practices", practicesRouter);

app.get("/", (req, res) => {
  res.status(200).json("Connected to BetterWrite API");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
