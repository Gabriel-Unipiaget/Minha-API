const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Olá, Mundo!");
});

app.listen(3000, () => {
    console.log("O servidor está rodando no caminho: http://localhost:3000")
});