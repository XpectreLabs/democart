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

export const ModalCustom = ({ showDetails, rows }: { showDetails: boolean, rows?: any }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {showDetails ? (
        <IconButton aria-label="show" size="small" onClick={handleOpen}>
          <RemoveRedEyeIcon fontSize="inherit" color="secondary" />
        </IconButton>
      ) : (
        <IconButton aria-label="edit" size="small" onClick={handleOpen}>
          <SendIcon fontSize="inherit" color="success" />
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
                  <li>Make:</li>
                  <li>Model:</li>
                  <li>Package:</li>
                  <li>Color:</li>
                  <li>Year:</li>
                  <li>Category:</li>
                  <li>Mileage:</li>
                  <li>Price:</li>
                  <li>
                    <p>make</p>
                  </li>
                  <li>
                    <p>model</p>
                  </li>
                  <li>
                    <p>Package</p>
                  </li>
                  <li>
                    <p>Color</p>
                  </li>
                  <li>
                    <p>Year</p>
                  </li>
                  <li>
                    <p>Category</p>
                  </li>
                  <li>
                    <p>Mileage</p>
                  </li>
                  <li>
                    <p>Price</p>
                  </li>
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
                  <TextField id="make" label="Make" variant="standard" />
                  <TextField id="model" label="Model" variant="standard" />
                  <TextField id="package" label="Package" variant="standard" />
                  <TextField id="color" label="Color" variant="standard" />
                </div>
                <div>
                  <TextField id="year" label="Year" variant="standard" />
                  <TextField
                    id="category"
                    label="Category"
                    variant="standard"
                  />
                  <TextField id="mileage" label="Mileage" variant="standard" />
                  <TextField id="price" label="Price" variant="standard" />
                </div>
              </section>
              <div className={Styles.btn}>
                <IconButton aria-label="Save" size="large" onClick={handleOpen}>
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
