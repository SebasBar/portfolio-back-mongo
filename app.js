require('dotenv').config();

const express = require("express");
const app = express();
const mongodbURL = process.env.MONGOOSEDB_URL;
const mongoose = require("mongoose");
const projectsRouter = require('./routes/project.routes')
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/projects', projectsRouter);

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

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;