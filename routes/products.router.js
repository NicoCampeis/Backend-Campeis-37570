const express = require("express");
const productsRouter = express.Router();
const {v4: uuidv4}=require ('uuid');
const fs = require('fs');
// importo productmanager desde el archivo js 
const productoManager = express.ProductManager();


productoManager = JSON.parse(fs.readFileSync("../"))

//tengo este array vacio, pero como hago para traer el mio, no me toma la ruta relativa.
//const products= [];


// Aca genere los endpoint
productsRouter.get('/', (req,res) =>{

    res.send(products)
});

productsRouter.get('/:pid', (req,res) =>{

    let {pid} = req.params;
    const prd = products.find(p => p.id === pid)
    res.send(prd)

});
// agrega un producto nuevo
productsRouter.post('/',(req,res) => {
    const produc = req.body;
    // console.log(req.body) me llega lo que agrego desde el cliente
    products.push({
        ...product,
        id: uuidv4(),
    })
        res.send('Producto agregado')
});

// modificamos el prodct
productsRouter.put('/:pid', (req,res) =>{
    const {pid}= req.params;
    const product = req.body;
    const p = products.find(p => p.id === pid);
    if(!!p){
        products[p]={
            ...product,
            id: pid,
        } 
        res.send('Producto Actualizado')
    } else {
            res.status(400).send('no existe el producto con ese id ')
        }
    });
//no me actualiza el repo 


module.exports= productsRouter