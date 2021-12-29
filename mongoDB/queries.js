const mongoose = require("mongoose");
const Product = require("./productSchema");

mongoose.connect("mongodb://localhost/store");

//------A
function queryA() {
  Product.find((err, data) => {
    if (err) return console.log(err);
    else {
      console.log(data);
    }
  });
}

//------B
function queryB() {
  Product.find((err, data) => {
    if (err) return console.log(err);
    else {
      console.log(JSON.stringify(data));
    }
  });
}

//------C
function queryC() {
  Product.find({}, { _id: false }, (err, data) => {
    if (err) return console.log(err);
    else {
      console.log(data);
    }
  });
}

//------D
function queryD() {
  Product.find({ type: "Audio Album" }, (err, data) => {
    if (err) return console.log(err);
    else {
      console.log(data);
    }
  });
}

//------E
function queryE() {
  Product.find({ "pricing.retail": { $lt: 5000 } }, (err, data) => {
    if (err) return console.log(err);
    else {
      console.log(data);
    }
  });
}

//------F
function queryF() {
  Product.find({ type: { $not: /^Film$/ } }, (err, data) => {
    if (err) return console.log(err);
    else {
      console.log(data);
    }
  });
}

//------G
function queryG() {
  Product.find({ "shipping.weight": { $gt: 15 } }, (err, data) => {
    if (err) return console.log(err);
    else {
      console.log(data);
    }
  });
}

//------H
function queryH() {
  Product.updateOne(
    { "details.title": "The Matrix" },
    { "pricing.list": 2500 },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Updated Docs : ", docs);
      }
    }
  );
}

//------I
function queryI() {
  Product.find(
    {
      $and: [{ type: "Film" }, { "shipping.dimensions.depth": 1 }],
    },
    (err, data) => {
      if (err) return console.log(err);
      else {
        console.log(JSON.stringify(data));
      }
    }
  );
}

//------J
function queryJ() {
  Product.count({ type: "Film" }, (err, count) => {
    if (err) console.log(err);
    else console.log(count);
  });
}

//------K
function queryK() {
  Product.find({ "details.writer": "Jonathan Nolan" }, (err, data) => {
    if (err) return console.log(err);
    else {
      console.log(data);
      console.log(JSON.stringify(data));
    }
  });
}

//------L
function queryL() {
  Product.find()
    .sort({ "pricing.savings": -1 })
    .limit(1)
    .exec((err, data) => {
      if (err) console.log(err);
      else console.log(data);
    });
}

//------M
function queryM() {
  Product.find({ "details.title": /x/ }, (err, data) => {
    if (err) return console.log(err);
    else {
      console.log(data);
    }
  });
}

//------N
function queryN() {
  Product.find({ "details.aspect_ratio": "1.66:1" }).remove((err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
}

module.exports = {queryA,queryB,queryC,queryD,queryE,queryF,queryG,queryH,queryI,queryJ,queryK,queryL,queryM,queryN}