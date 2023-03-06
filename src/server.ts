import express from "express";
require("dotenv").config();

const cors = require("cors");
const app = express();
const middleware = require("./middleware");

app.use(express.json());
app.use(cors());
app.use("/posts", require("./routes/testRoutes"));
// app.use(middleware.decodeToken);

app.get("/api/test", (req, res) => {
  return res.json({ test: ["asd", "asdf", "asdfg", "asdfgh"] });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
