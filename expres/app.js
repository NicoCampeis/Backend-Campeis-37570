
const express = require ('express')
const ProductManager = require('../index')
const app = express()
const productManager = new ProductManager('./products.json')
const PORT = 8080


app.get ('/products', async (req,res)=>{
const products = await productManager.getProducts();
const {limit} = req.query
if (limit) return res.json(products.slice(0,limit))
else return res.json(products)
})

app.get ('/products/:pid', async (req,res)=>{
    const products = await productManager.getProducts();
    const {pid} = req.params
    const product = products.find (products => products.id === pid)

    if (product) return res.status(200).json(product)
    else return res.status(404).json({message:'Product not found'});
})

app.listen(PORT, () => {
console.log (`Server running on port ${PORT}`)
})