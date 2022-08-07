const canciones = require("./canciones");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const publicPath = '/public';

let PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Servidor escuchando puerto ${PORT}.`);
});

app.use("/canciones", canciones);

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, `${publicPath}/about.html`));
});

app.use(function (req, res, next) {
  res.status(404).send("El recurso solicitado no ha sido encontrada.");
});
