import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Styles from "./modal.module.scss";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ModalCustom = ({ showDetails, id, rows, cargarDatos, setListaDatos }: { showDetails: boolean, id:string, rows?: any, cargarDatos:Function, setListaDatos:Function }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [make, setMake] = React.useState("");
  const [model, setModel] = React.useState("");
  const [packageI, setPackage] = React.useState("");
  const [color, setColor] = React.useState("");
  const [year, setYear] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [mileage, setMileage] = React.useState("");
  const [price, setPrice] = React.useState("");

  const [make2, setMake2] = React.useState("");
  const [model2, setModel2] = React.useState("");
  const [package2, setPackage2] = React.useState("");
  const [color2, setColor2] = React.useState("");
  const [year2, setYear2] = React.useState("");
  const [category2, setCategory2] = React.useState("");
  const [mileage2, setMileage2] = React.useState("");
  const [price2, setPrice2] = React.useState("");
  const [idValue, setIdValue] = React.useState("");

  console.log(id)

  const obtenerValor = (input:any) => {
    let valorInput: HTMLInputElement = document.querySelector(input);
    return valorInput?.value;
  };

  const clearFields = () => {
    setMake2("");
    setModel2("");
    setPackage2("");
    setColor2("");
    setYear2("");
    setCategory2("");
    setMileage2("");
    setPrice2("");
    setIdValue("");
  };

  const save = () => {
    let scriptURL = 'http://localhost:3001/addCart';

    const make = obtenerValor("#make");
    const model = obtenerValor("#model");
    const packag = obtenerValor("#package");
    const color = obtenerValor("#color");
    const year = obtenerValor("#year");
    const category = obtenerValor("#category");
    const mileage = obtenerValor("#mileage");
    const price = obtenerValor("#price");

    const dataU = {make,model,packag,color,year,category,mileage,price,id};

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(dataU),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((resp) => resp.json())
    .then(function(dataR) {
      setTimeout(() => {
          setOpen(false);
          cargarDatos(setListaDatos);
          clearFields(); // Added: Clear inputs after to save
      }, 1200);
    })
    .catch(error => {
      console.log(error.message);
      console.error('Error!', error.message);
    });
  }

  const detail = (id:string) => {
    const scriptURL = 'http://localhost:3001/carDetail'; // deberia es
    const dataU = {id};

    fetch(scriptURL, {
       method: 'POST',
       body: JSON.stringify(dataU),
       headers:{
         'Content-Type': 'application/json'
       }
     })
    .then((resp) => resp.json())
    .then(function(info) {
      console.log(info);
      setMake(info['listData'][0]['Make']);
      setModel(info['listData'][0]['Model']);
      setPackage(info['listData'][0]['Package']);
      setColor(info['listData'][0]['Color']);
      setYear(info['listData'][0]['Year']);
      setCategory(info['listData'][0]['Category']);
      setMileage(info['listData'][0]['Mileage']);
      setPrice(info['listData'][0]['Price']);
     })
     .catch(error => {
       console.log(error.message);
       console.error('Error!', error.message);
     });
  }

  detail(id);

  return (
    <div>
      {showDetails ? (
        <IconButton aria-label="show" size="small" onClick={handleOpen}>
          <RemoveRedEyeIcon fontSize="inherit" color="secondary" />
        </IconButton>
      ) : (
        <IconButton aria-label="edit" size="large" onClick={handleOpen}>
          <AddCircleOutlineIcon fontSize="inherit" color="success" />
        </IconButton>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {showDetails ? (
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Details
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Box className={Styles.columns}>
                  <li>Make: {make}</li>
                  <li>Model: {model}</li>
                  <li>Package: {packageI}</li>
                  <li>Color: {color}</li>
                  <li>Year: {year}</li>
                  <li>Category: {category}</li>
                  <li>Mileage: {mileage}</li>
                  <li>Price: {price}</li>
                </Box>
              </Typography>
              <div className={Styles.btnOption}>
                <IconButton aria-label="delete" size="large">
                  <DeleteIcon fontSize="inherit" color="error" />
                </IconButton>
                <IconButton aria-label="edit" size="large">
                  <EditIcon fontSize="inherit" color="info" />
                </IconButton>
              </div>
            </div>
          ) : (
            <div className={Styles.form}>
              <section>
                <div>
                  <TextField id="make" label="Make" variant="standard" value={make2} onChange={(e) => setMake2(e.target.value)}/>
                  <TextField id="model" label="Model" variant="standard" value={model2} onChange={(e) => setModel2(e.target.value)}/>
                  <TextField id="package" label="Package" variant="standard" value={package2} onChange={(e) => setPackage2(e.target.value)}/>
                  <TextField id="color" label="Color" variant="standard" value={color2} onChange={(e) => setColor2(e.target.value)}/>
                </div>
                <div>
                  <TextField id="year" label="Year" variant="standard" value={year2} onChange={(e) => setYear2(e.target.value)}/>
                  <TextField
                    id="category"
                    label="Category"
                    variant="standard"
                    value={category2} onChange={(e) => setCategory2(e.target.value)}
                  />
                  <TextField id="mileage" label="Mileage" variant="standard" value={mileage2} onChange={(e) => setMileage2(e.target.value)}/>
                  <TextField id="price" label="Price" variant="standard" value={price2} onChange={(e) => setPrice2(e.target.value)}/>
                </div>
              </section>
              <div className={Styles.btn}>
                <IconButton aria-label="Save" size="large" onClick={()=>{save()}}>
                  <SendIcon fontSize="inherit" color="success" />
                </IconButton>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};
