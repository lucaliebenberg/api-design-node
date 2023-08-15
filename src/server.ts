import express from "express";
import router from "./route";
import morgan from "morgan";
import { protect } from "./modules/auth";
import { createNewUser, signIn } from "./handlers/user";

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

app.post("/user", createNewUser);
app.post("/signin", signIn);

// error handlers
// @ts-ignore
app.use((err, req, res, next) => {
  console.log("====================================");
  console.log(err);
  res.json({ message: "oops, there was an error..." });
  console.log("====================================");
});

export default app;
