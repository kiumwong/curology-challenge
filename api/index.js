import express from "express";
import bodyParser from "body-parser";
import OrderRoutes from "./server/routes/OrderRoutes";
import cors from "cors";
import logger from "morgan";
import path from "path";

const app = express();
const port = process.env.PORT || 5678;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(logger("dev"));

app.use("/api/v1/magic", OrderRoutes);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Hello. Are you ready for some magic? =P",
  })
);

if (process.env.NODE_ENV == "production") {
  app.use("/", express.static("../client/"));
  app.get("/*", function (request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
