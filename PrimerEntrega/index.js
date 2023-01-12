const express = require("express");
const { ProductManager } = require("./productManager");
const producManager = new ProductManager
const app = express();

const PORT = 8080;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",require("../routers/cartsRouter"))


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});