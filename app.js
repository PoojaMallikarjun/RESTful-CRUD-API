const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/PeopleDB";
const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected");
});

app.use(express.json());

const peopleRouter = require("./routes/people");
app.use("/people", peopleRouter);

app.listen(9000, () => {
  console.log("server started");
});
