const express = require("express");
const router = express();
const cors = require('cors');
const { readFileSync } = require('fs');
//const parser = require('csv-parser');
const { parse } = require('csv-parse/sync');
require('dotenv').config();

router.use(express.static('public'));
router.use(express.urlencoded({ extended:false }));
router.use(express.json());
router.use(cors());


router.get('/cars', async (req,res, next) => {
  let listData = [];
  const fileContent = readFileSync('./Cart.csv')
  const data = parse(fileContent);

  for(let j=1; j < Object.keys(data).length; j++){
    let item = {
      "Male": data[j][0],
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




// Servidor HTTP
// const serverHttp = http.createServer(router);
// serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
// serverHttp.on('listening', () => console.info(`Notes App running at http://${process.env.IP}:${process.env.HTTP_PORT}`));
router.listen(3001, () => {
  console.log("Aplicación ejecutandose ....");
});



// Servidor HTTP
// const httpsServer = https.createServer(options, router);
// httpsServer.listen(443, process.env.IP);

