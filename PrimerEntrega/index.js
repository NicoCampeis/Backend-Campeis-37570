const express = require("express");
const app = express();
const { ProductManager } = require("./productManager");
const producManager = new ProductManager
//requeri products y carts.
const productsRouter = require('../routes/products.router')
const cartsRouter = require('../routes/carts.router')
const PORT = 8080;


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/products",productsRouter )
app.use('/api/carts',cartsRouter)


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});