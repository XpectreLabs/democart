const express = require("express");
const router = express();
const cors = require('cors');
const { readFileSync } = require('fs');
const fs = require("fs");
const { parse } = require('csv-parse/sync');

router.use(express.static('public'));
router.use(express.urlencoded({ extended:false }));
router.use(express.json());
router.use(cors());

router.post('/cars', async (req,res, next) => {
  let listData = [];
  const fileContent = readFileSync('./Cart.csv')
  const data = parse(fileContent);

  for(let j=1; j < Object.keys(data).length; j++){
    let item = {
      "Make": data[j][0],
      "Model": data[j][1],
      "Package": data[j][2],
      "Color": data[j][3],
      "Year": data[j][4],
      "Category": data[j][5],
      "Mileage": data[j][6],
      "Price": data[j][7],
      "Id": data[j][8]
     }
     listData.push(item);
  }
  res.json({listData})
});


router.post('/addCart', async (req,res, next) => {
  const fastcsv = require("fast-csv");
  const file = fs.createWriteStream("Cart.csv");
  const fileContent = readFileSync('./Cart.csv')

  let listData = [];
  const dataL = parse(fileContent);

  for(let j=1; j < Object.keys(dataL).length; j++){
    let item = {
      "Make": dataL[j][0],
      "Model": dataL[j][1],
      "Package": dataL[j][2],
      "Color": dataL[j][3],
      "Year": dataL[j][4],
      "Category": dataL[j][5],
      "Mileage": dataL[j][6],
      "Price": dataL[j][7],
      "Id": dataL[j][8]
     }
     listData.push(item);
  }

  const make = req.body.make;
  const model = req.body.model;
  const package = req.body.packag;
  const color = req.body.color;
  const year = req.body.year;
  const category = req.body.category;
  const mileage = req.body.mileage;
  const price = req.body.price;
  const id = triggerId();

  let item =
  {
    "Make": make,
    "Model": model,
    "Package": package,
    "Color": color,
    "Year": year,
    "Category": category,
    "Mileage": mileage,
    "Price": price,
    "Id": id
  };

  listData.push(item);

  fastcsv.write(listData, { headers: true }).pipe(file);
  res.json({"status":"exito"});
});


router.post('/carDetail', async (req,res, next) => {
  let listData = [];
  const fileContent = readFileSync('./Cart.csv')
  const data = parse(fileContent);
  const id_car = req.body.id;

  for(let j=1; j < Object.keys(data).length; j++){
    if(data[j][8]===id_car) {
      let item = {
        "Make": data[j][0],
        "Model": data[j][1],
        "Package": data[j][2],
        "Color": data[j][3],
        "Year": data[j][4],
        "Category": data[j][5],
        "Mileage": data[j][6],
        "Price": data[j][7],
        "Id": data[j][8]
       }
       listData.push(item);
    }
  }
  res.json({listData})
});

router.get('/cadena', async (req,res, next) => {
    let result = triggerId();
    res.json({ result })
});

function triggerId(){
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result= '';
  const charactersLength = characters.length;
  for ( let i = 0; i < 9; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

router.listen(3001, () => {
  console.log("Aplicación ejecutandose ....");
});
