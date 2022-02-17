let productoDao;
let carritoDao;

const db = "mongo";

switch (db) {
  case "mongo":
    const ProductMongo = require("./products/productDaosMongo");
    productoDao = new ProductMongo();
    break;

  case "firebase":
    const ProductFirebase = require("./products/productDaosFirebase");
    productoDao = new ProductFirebase();
    break;
}

module.exports = { productoDao };
