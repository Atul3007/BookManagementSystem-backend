const express = require("express");
const { connection } = require("./config/db");
const {bookrouter} = require("./routes/bookRoute") 
const app=express();
const cors = require("cors"); 

app.use(
  cors()
);

app.use(express.json());

app.use("/api/", bookrouter);

app.get("/",(req, res) => {
  try {
    res.send("Welcome");
  } catch (error) {
    console.log("Error");
  }
});

app.listen(8000, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    console.log("Error occurred");
  }
  console.log(`Running on 8000`);
});
