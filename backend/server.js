const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Contacts Manager API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
