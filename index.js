const express = require("express");
const { connection } = require("./config/db");
const {bookrouter} = require("./routes/bookRoute") 
const app=express();
const cors = require("cors"); 

app.use(
  cors()
);

require('dotenv').config();

app.use(express.json());

const port = process.env.PORT; 

app.use("/api/", bookrouter);

app.get("/",(req, res) => {
  try {
    res.send("Welcome");
  } catch (error) {
    console.log("Error");
  }
});

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    console.log("Error occurred");
  }
  console.log(`Running on ${port}`);
});
