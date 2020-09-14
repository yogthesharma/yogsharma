const express = require(`express`);
const cors = require(`cors`);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, (err) => {
  if (err) return console.log("Some Error Occures In Starting Server");
  console.log("Server Started At Port ", port);
});
