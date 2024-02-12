const path = require("path");


data_folder = "/data/";
products_folder = "/products";
products_file = "products.json";

// const full_path = path.join(data_folder, products_folder, products_file);

const abs_path = path.resolve(__dirname);

console.log(abs_path); 
const greeting = require("C:\Developer's Insititute 2023\DI_Bootcamp\Week_11\Day_2\DailyChallenge\");