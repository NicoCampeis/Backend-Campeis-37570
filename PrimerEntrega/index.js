const express = require("express");
const app = express();
const { ProductManager } = require("./productManager");
const producManager = new ProductManager
const productsRouter = require('../routes/products.router')
const PORT = 8080;


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/products",productsRouter )



app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});