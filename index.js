let express = require("express");
let path = require("path");
let app = express();

app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.redirect("/home");
});
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/random", (req, res) => {
  res.sendFile(path.join(__dirname, "/random.html"));
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/404.html"));
});

app.listen(3000, () => console.log("in ascolto sulla porta 3000"));
