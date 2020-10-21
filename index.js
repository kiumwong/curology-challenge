const config = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const OrderRoutes = require("./server/routes/OrderRoutes");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger("dev"));

const port = process.env.PORT || 5678;

app.use("/api/v1/magic", OrderRoutes);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Hello. Are you ready for some magic? =P",
  })
);

  app.use(express.static(path.join(__dirname, "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

module.exports = app;
