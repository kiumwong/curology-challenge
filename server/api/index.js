import config from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import OrderRoutes from "./server/routes/OrderRoutes";
import cors from "cors";
import logger from "morgan";

const app = express();
const port = process.env.PORT || 5678;
config.config();

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

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
