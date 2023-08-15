import styles from "./home.module.scss";
import Box from "@mui/material/Box";
import { Tabla } from "../../components/organims/table";
import { Responsive } from "../../components/organims/responsiveTable";
import { useState } from "react";

let rows:any = [];

async function cargarDatos(setListaDatos:any='') {
  let scriptURL = 'http://localhost:3001/cars';
  let dataUrl = {};

  await fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(dataUrl),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then((resp) => resp.json())
  .then(function(info) {
    let listData = [];
    for(let j=0; j < (Object.keys(info['listData']).length); j++) {

      let item = {
        "make": info['listData'][j]['Make'],
        "model": info['listData'][j]['Model'],
        "package": info['listData'][j]['Package'],
        "color": info['listData'][j]['Color'],
        "year": info['listData'][j]['Year'],
        "category": info['listData'][j]['Category'],
        "mileage": info['listData'][j]['Mileage'],
        "price": info['listData'][j]['Price'],
        "id": info['listData'][j]['Id']
      }
     listData.push(item);
    }
    rows = listData;

    if(setListaDatos)
      setListaDatos(rows);

    console.log(rows);
  })
  .catch(error => {
    console.log(error.message);
    console.error(error.message);
  });
}

cargarDatos();

export const Home = () => {
  const [listaDatos, setListaDatos] = useState([]);
  const [cargandoVisible, setCargandoVisible] = useState(true);

  let idSI = setInterval(() => {
    if(!rows)
      console.log("Vacio");
    else {
      setListaDatos(rows);
      setCargandoVisible(false);
      clearInterval(idSI);
    }
  }, 1000);


  return (
    <div>
      <Box className={styles.table}>
        <Tabla rows={listaDatos} cargarDatos={cargarDatos} setListaDatos={setListaDatos} />
      </Box>
      <Box className={styles.mobile}>
        <Responsive rows={listaDatos} cargarDatos={cargarDatos} setListaDatos={setListaDatos} />
      </Box>
      <div className="u-textAlignCenter">
          <img className={cargandoVisible? "Cargando Mt mostrarI-b Sf" : "Cargando Mt Sf"}  src="img/loading.gif" alt="" />
      </div>
    </div>
  );
};
