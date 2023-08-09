// const app = require("./server");
import app from "./server";

app.listen(3001, () => {
  console.log("====================================");
  console.log("Server listening on http://localhost:3001");
  console.log("====================================");
});
