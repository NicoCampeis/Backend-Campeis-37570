const fs = require("fs");

const products =[]

class ProductManager {
static id = 1;

constructor(title, description, price, thumbnail, code, stock, path) {
    this.path = path // variable que pide agregar.
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock; 
    ProductManager.id++;
}

cargarProductos(){
    fs.writeFileSync("products.json",JSON.stringify(products),()=>{throw new Error("Se genero un error.")})
};

leerProducts(){
    const obtenerProd = JSON.parse(fs.readFileSync("products.json", "utf-8"))
    console.log(obtenerProd);
};

updateProd(id,nuevoProd){
    const obtenerProd = JSON.parse(fs.readFileSync("products.json", "utf-8"))
    obtenerProd.map((element)=>{
        if(element.id === id){
            element.title= nuevoProd.title,
            element.description= nuevoProd.description,
            element.price= nuevoProd.price,
            element.thumbnail= nuevoProd.thumbnail,
            element.code= nuevoProd.code,
            element.stock=nuevoProd.stock,
            element.id = id
        }

    })
    fs.writeFileSync("products.json",JSON.stringify(obtenerProd),()=>{throw new Error("Se genero un error.")})
};
// map x cada elemeto que haya en el array te ejecuta una funcion.
borrarProd(id){
    const vacio= [];
    const obtenerProd = JSON.parse(fs.readFileSync("products.json", "utf-8"))
    obtenerProd.map((element)=>{
        if(element.id != id){
            vacio.push(element)
        }
    })
    fs.writeFileSync("products.json",JSON.stringify(vacio),()=>{throw new Error("Se genero un error.")})
};

getProducts(){
    const products= fs.readFileSync(`products.json`, "utf-8"); 
    return JSON.parse(products);
}

addProducts() {
    const product = {
    title: this.title,
    description: this.description,
    price: this.price,
    thumbnail: this.thumbnail,
    code: this.code,
    stock: this.stock,
    id: ProductManager.id,
    };


    const checkInCart = products.find(
    (element) => element.code === product.code
    );
    if (checkInCart) {
        console.log("Error");
    }
    else{
        products.push(product)
        ProductManager.id++
    }


if (!product.title ||
    !product.description ||
    !product.price ||
    !product.thumbnail ||
    !product.code ||
    !product.stock ||
    !product.id){
console.log("verificar campos");
throw new Error("Los campos estan vacios") // completar campos para que no me tire errores
}
}};

const getProductsById = (id) => {
const search = products.find((product) => product.id === id);
if (search == undefined) {
    console.log("Not found");
} else {
    console.log(search);
}
};

// const pM = new ProductManager();
// pM.leerProducts();

// pM.updateProd(4,{title:"Elaion Auro",description:"asdasdasdas",price:2000,thumbnail:"img",code:223442,stock:18})
// pM.borrarProd(4)

module.exports = {ProductManager};