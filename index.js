const { writeFile} = require("fs");

const aceites= [ // pide crear una clase de productos 
    {title:"Elaion F10",
    description:"Aceite multigrado para vehiculos hasta el año 2008",
    price: 1500,
    thumbnail:"imagen",
    code: 1002,
    stock: 3},

    {title:"Elaion F10",
    description:"Aceite multigrado para vehiculos hasta el año 2008",
    price: 1500,
    thumbnail:"imagen",
    code: 1002,
    stock: 3},

    {title:"Elaion F10",
    description:"Aceite multigrado para vehiculos hasta el año 2008",
    price: 1500,
    thumbnail:"imagen",
    code: 1002,
    stock: 3},
].toString();

const productsNew =[

    {title:"Elaion F10",
    description:"Aceite multigrado para vehiculos hasta el año 2008",
    price: 1500,
    thumbnail:"imagen",
    code: 1002,
    stock: 3}
].toString();

class ProductManager {
static id = 1;

constructor(title, description, price, thumbnail, code, stock, path) {
    this.path= path // variable que pide agregar.
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    ProductManager.id++;
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

const getProducts = () => {
console.log(products);
};
const getProductsById = (id) => {
const search = products.find((product) => product.id === id);
if (search == undefined) {
    console.log("Not found");
} else {
    console.log(search);
}
};
// DESAFIO 2

function callbackWriteFile(err){
    if (err) throw err;
    console.log("Agregado con exito");
};

writeFile(aceites,"lista", callbackWriteFile);


 //DESAFIO 1

/*const prod1 = new ProductManager(
"Elaion F10",
"Aceite multigrado para vehiculos hasta el año 2008",
1500,
"imagen",
1002,
3
);
const prod2 = new ProductManager(
"Elaion F30",
"Aceite semi sintetico para vehiculos ",
3000,
"imagen",
1003,
5
);

prod1.addProducts();

prod2.addProducts();

getProducts();

getProductsById(5) // declaro un id que no existe para me tire "not Found" */
