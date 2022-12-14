const products = [];

class ProductManager {
static id = 1;

constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    ProductManager.id;
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

const prod1 = new ProductManager(
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

 //const prod3 = new ProductManager()

prod1.addProducts();

prod2.addProducts();

//prod3.addProducts(); //tira undefined, pero genera el id


getProducts();

getProductsById(5) // declaro un id que no existe para me tire "not Found"