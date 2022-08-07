const express = require("express");
const router = express.Router();
var path = require("path");

let publicPath = '/public';
let musicPath = `${publicPath}/songs`;


router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, `${publicPath}/canciones.html`));
});

router.get("/descargar", function (req, res) {
  res.sendFile(path.join(__dirname, `${musicPath}/${req.query.nombre}.mp3`));
});

router.post("/", function (req, res) {
  res.send("Respuesta a POST");
});

router.put("/", function (req, res) {
  res.send("Respuesta a PUT");
});

router.delete("/", function (req, res) {
  res.send("Respuesta a DELETE");
});

module.exports = router;
