const express = require("express");
const cartsRouter = express.Router();
const {v4: uuidv4}=require ('uuid');
// const {fs} =require{'fs'}
let compras = []; //esto metemos dentro de producto.js


cartsRouter.get('/', (req,res) =>{

    res.send(products)
});

cartsRouter.get('/:pid', (req,res) =>{

    let {pid} = req.params;
    const prd = products.find(p => p.id === pid)
    res.send(prd)

});
// agrega un producto nuevo
cartsRouter.post('/',(req,res) => {
    const produc = req.body;
    // console.log(req.body) me llega lo que agrego desde el cliente
    products.push({
        ...product,
        id: uuidv4(),
    })
        res.send('Producto agregado')
});

// modificamos el prodct
cartsRouter.put('/:pid', (req,res) =>{
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


module.exports= cartsRouter


//noc si usarlo o no 

// routerCarts.post("/", (req, res) => {
//     const body = req.body;

// if (body) {
//     compras.push(body);
//     res.status(200).send(body); 
// }
//     res.status(400).send("no no, le erraste.");
// });

// module.exports = routerCarts;
