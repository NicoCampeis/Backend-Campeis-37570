const express = require("express");
const routerCarts = express.Router();

let compras = [];

routerCarts.post("/", (req, res) => {
    const body = req.body;

if (body) {
    compras.push(body);
    res.status(200).send(body); 
}
    res.status(400).send("no no, le erraste.");
});

module.exports = {
routerCarts,
};
