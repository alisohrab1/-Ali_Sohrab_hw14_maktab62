const mongoose = require("mongoose");
const data = require("./data/data.json");
const Product = require("./productSchema");

// ---------1.1
mongoose.connect("mongodb://localhost/store");

// ---------1.2.A
async function insert1() {
  await Product.create(data[0]);
}
// ---------1.2.B
const data2 = data.slice(1);
async function myInsertMany() {
  await Product.insertMany(data2);
}

//firing the functions
async function insert() {
  await insert1();
  await myInsertMany();
  console.log("done!");
}

insert();
