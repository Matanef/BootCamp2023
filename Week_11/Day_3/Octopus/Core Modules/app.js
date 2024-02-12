const path = require("path");
const fs = require("fs");


products_path = "/data/products/products.json";
products_file = path.basename(products_path);

console.log(products_file);

data_folder = "/data/";
products_folder = "/products";
products_file = "products.json";

const full_path = path.join(data_folder, products_folder, products_file);

console.log(full_path);

const abs_path = path.resolve(__dirname, "data", "products", "products.json");

console.log(abs_path);

// const data = fs.readFileSync("info.txt", "utf-8");
// console.log(data); // file content
// console.log("                        The file has been read");

const info = fs.readFile("info.txt", "utf-8", (err, data) => {
    console.log(data);
  });
  console.log("The file has been read");