import express from "express";
import fibRoute from "./fibRoute";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/fib/:num", fibRoute);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

export default app;
