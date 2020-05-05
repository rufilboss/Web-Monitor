const express = require("express");
//const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded())

const getRoot = (req, res) => {
  res.json({ status: "success" });
};

let data = {
  message: "Success",
  data: {
    name: "Yusuf",
    Ocuppation: "Software Engineer",
  },
};

const createData = (req, res) => {
  // We assign the body of the request to the data variable.
  data = req.body;
  // We send the data variable in the response.
  res.json(data);
};

const getData = (req, res) => {
  //data comes from the variable we declared and mutated earlier
  res.json(data);
};

app.get("/", getRoot);

// variable should be outside of the API's scope.

//app.post("/data", createData);

//app.get("/data", getData);

app.route("/data").get(getData).post(createData);

app.listen(3000, () => console.log("Listening on port 3000"));
