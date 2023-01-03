
const express = require ('express')
const {ProductManager} = require('./index')
const app = express()
const productoManager = new ProductManager()
const PORT = 8080




app.get('/productos', async (req,res)=>{

const products = await productoManager.getProducts();
const {limit} = req.query
if (limit) return res.json(products.slice(0,limit))
else return res.json(products)



})

app.get('/productos/:pid', async (req,res)=>{
    const products = await productoManager.getProducts();
    const {pid} = req.params
    const product = products.find (products => products.id === pid)

    if (product) return res.status(200).json(product)
    else return res.status(404).json({message:'Product not found'});
})

app.listen(PORT, () => {
console.log (`Server running on port ${PORT}`)
})