import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoute from "./route/posts.js";
import userRoutes from "./route/users.js";

dotenv.config();

const app = express();
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoute);
app.use("/user", userRoutes);

const CONNECTION_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@kaidowblog.xgauc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connect to Mongo");
    app.listen(PORT, () => console.log(`Server runnig on port: ${PORT}`));
  })
  .catch((err) => console.log("ERR:", err.message));
