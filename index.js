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
    if (checkInCart == true) {
    console.log("error");
    } else {
    products.push(product);
    ProductManager.id++;
    }
}
}

const isInCart = (id) => {
return products.find((product) => product.title === title);
};

const getProducts = () => {
console.log(products);
};

const getProductsById = (id) => {
const search = products.find((product) => product.id === id);

if (search == undefined) {
    console.log("Product not found");
} else {
    console.log(search);
}
};
const isInProducts = (title) => {
products.find((prod) => prod.title === title);
};

const prod1 = new ProductManager(
"Elaion F10",
"Aceite multigrado para vehiculos hasta el año 2008",
1500,
"imagen",
1001,
3
);

const prod2 = new ProductManager(
"Elaion F30",
"Aceite semi sintetico para vehiculos ",
3000,
"imagen",
1002,
5
);



prod1.addProducts();

prod2.addProducts();

getProducts();
