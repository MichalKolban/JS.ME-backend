const express = require("express");
const app = express();
const router = require('./routes/quiz')
const mongoose = require('mongoose');

const config = require('./config/default.json')

const port = config.database_port;
const URL = config.database_URL;


app.use('/api', router)

const connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" =============================");
    console.log("| Connected to database ✅    |");
    app.listen(port, () => {
      console.log(`| Server is running 🔥 : ${port} |`);
      console.log(" =============================");
    });
  } catch (err) {
    console.log(`Error : ${err}`)
  }
};

connectDB();
