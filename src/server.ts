import express from "express";
import router from "./route";
import morgan from "morgan";
import { protect } from "./modules/auth";

const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Hello, world!" });
});

app.use("/api", protect, router);

export default app;
