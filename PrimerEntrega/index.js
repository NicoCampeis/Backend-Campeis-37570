const express = require("express");
const { ProductManager } = require("./productManager");
const producManager = new ProductManager
const app = express();
const cartsRouter = require('../routers/cartsRouter');
const PORT = 8080;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",require("../routers/cartsRouter"))


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});