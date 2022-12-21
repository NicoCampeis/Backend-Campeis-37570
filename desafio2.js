const fs = require("node:fs");

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = this.readFile();
  }

  readFile() {
    const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
    return data;
  }

  writeData(data) {
    let dataString = JSON.stringify(data);
    fs.writeFileSync(`./${this.path}`, dataString);
  }

  getAllProducts() {
    let data = this.readFile();
    console.log(data);
  }

  generarId() {
    if (this.products.length > 0) {
      let idProduct = this.products.map((product) => product.id);
      return Math.max(...idProduct) + 1;
    } else {
      let idProduct = 1;
      return idProduct;
    }
  }

  addproduct(product) {
    if (this.products.find((item) => item.code === product.code)) {
      return console.log("codigo existente");
    } else if (
      !!!product.title ||
      !!product.price ||
      !!product.code ||
      !!product.description ||
      !!product.thumbnail ||
      !!product.stock
    )
      return console.log("faltan datos");
    else {
      let data = this.readFile();
      product.id = this.generarId();
      data.push(product);
      this.writeData(data);
    }
  }
  getProductById(id) {
    let data = this.readFile();
    if (data.find((product) => product.id === id)) {
      let productToGet = data.find((product) => product.id === id);
      console.log(productToGet);
    } else {
      console.log("este id no se encuentra");
    }
  }

  updateProduct(id, product) {
    let data = this.readFile();
    if (data.find((product) => product.id === id)) {
      let productDeleted = data.filter((product) => product.id !== id);
      product.id = id;
      productDeleted.push(product);
      this.writeData(productDeleted);
    } else {
      console.log("el id del producto no se encuentra");
    }
  }
  deleteProduct(id) {
    let data = this.readFile();
    if (data.find((product) => product.id === id)) {
      let products = data.filter((product) => product.id !== id);
      this.writeData(products);
      console.log(products);
    } else {
      console.log("el id del producto no se encuentra");
    }
  }
}
const productManager = new ProductManager("products.json");

let prod1 = {
  title: "agua",
  description: "agua baja en sodio",
  price: 100,
  code: "sed1",
  thumbnail: "img",
  stock: 10,
};

productManager.addproduct(prod1);

productManager.getProductById(2);

productManager.deleteProduct(1);

productManager.updateProduct(4, {
  title: "gaseosa",
  description: "gaseosa sabor naranja",
  price: 200,
  code: "sed5",
  thumbnail: "img",
  stock: 12,
});
