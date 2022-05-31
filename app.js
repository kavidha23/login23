const express = require("express");
const apiRoutes = require("./api-routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
app.use(cors());

mongoose.connect("mongodb://localhost:27017/test");
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
});
let db = mongoose.connection;

if (!db) {
  console.log("Error connecting db !!");
} else {
  console.log("Db connected successfully");
}

//app.use(bodyParser.json());

app.use(express.json());

//app.use("/api", apiRoutes);

const port = process.env.PORT || 8080;

app.get("/getData", async (req, res) => {
  var result = await db.collection("Products").find().toArray();
  res.send(result);
});

app.post("/data", async (req, res) => {
  //console.log(req.body);
  var data = await db.collection("Products").insertOne({
    name: "Nokia",
    mobile: "x700",
  });
  res.send(data);
});

app.listen(port, function () {
  console.log("Running on port " + port);
});
