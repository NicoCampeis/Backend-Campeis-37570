const express = require("express");
const app = express();
//ME DICE QUE EXPRESS.PRODUCTMANAGER NO ES UNA FUNCION EN PRODCTS.ROUTER
//const { ProductManager } = require("./productManager");
//const producManager = new ProductManager

//requeri products y carts.
const productsRouter = require('../routes/products.router')
const cartsRouter = require('../routes/carts.router')
const PORT = 8080;

//instale handlebars y ahora agego lo basico para poder usarlo.

const handlebars = require ('express-handlebars');

app.engine('handlebars', handlebars.engine());

//en la linea 15 configuramos que motor de plantilla estamos usando (handlebars)
app.set('view engine', 'handlebars');

// en la linea 17 nos va a traer las vista del directorio views
app.set('views',__dirname +'/views');

//le indicamos que plantilla vamos a mostrar 

app.get("/", (req,res)=>{
        res.status(200).render('home')
        //seguir mirando desde los 48'
});

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/products",productsRouter )
app.use('/api/carts',cartsRouter)


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});