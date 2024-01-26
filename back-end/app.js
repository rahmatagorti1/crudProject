const express = require("express");
var cors = require("cors");
var app = express();
const http = require("http");
const server = http.createServer();

const db = require("./database/DB");

const productRouter = require("./routes/productRouter");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/products", productRouter);

app.set("secretkey", "rahma");

app.listen(4000, function () {
  console.log("running PATHS");
});
