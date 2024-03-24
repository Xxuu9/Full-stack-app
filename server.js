import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import jobRouter from "./routes/jobRouter.js";

app.use(express.json());

app.use("/api/v1/jobs", jobRouter);
if (process.env.NODE_DEV === "development") {
  app.use(morgan("dev"));
}

const port = process.env.port || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data recieved", data: req.body });
});

// get all jobs
app.get("/api/v1/jobs");

// create jobs
app.post("/api/v1/jobs");

// get single job
app.get("/api/v1/jobs/:id");

// edit job
app.patch("/api/v1/jobs/:id");

// delete job
app.delete("/api/v1/jobs/:id");

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something is wrong" });
});

// app.listen(port, () => {
//   console.log(`server running on port ${port}...`);
// });
