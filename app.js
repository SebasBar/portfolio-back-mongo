require('dotenv').config();

const express = require("express");
const app = express();
const mongodbURL = process.env.MONGOOSEDB_URL;
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const projectsRouter = require('./routes/project.routes');
const cors = require("cors");
const path = require("path");

//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/projects', projectsRouter);
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {

  console.log('request: ' + req);
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//configure mongoose
mongoose.connect(
  mongodbURL || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;