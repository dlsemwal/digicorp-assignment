const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();
require("express-async-errors");

const employee = require("./routes/user");
const auth = require("./routes/auth");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", auth);
app.use("/api/me", employee);
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send("Something failed...");
  }
});

// DB connection
const db = config.get("db");
mongoose.connect(db).then(() => console.log("connected to DB...."));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
