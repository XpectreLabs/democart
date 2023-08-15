import * as React from "react";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Styles from "./responsive.module.scss";

export const Responsive = ({ rows }: { rows: any }) => {

const Row =(props: { row: any })=> {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.make}
        </TableCell>
        <TableCell align="right">{row.model}</TableCell>
        <TableCell align="right">{row.package}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Color</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell align="left">Category</TableCell>
                    <TableCell align="left">mi</TableCell>
                    <TableCell align="left">cents</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((historyRow: any) => (
                    <TableRow key={historyRow.color}>
                      <TableCell component="th" scope="row">
                        {historyRow.color}
                      </TableCell>
                      <TableCell>{historyRow.year}</TableCell>
                      <TableCell align="left">{historyRow.category}</TableCell>
                      <TableCell align="left">{historyRow.mileage}</TableCell>
                      <TableCell align="left">{historyRow.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

return (
  <Box>
    <Box className={Styles.results}>
      <Box className={Styles.conten}>
        <Box className={Styles.resultResponsive}>
          <div className={Styles.btnEdit}>
            <IconButton aria-label="delete" size="small">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </div>
          <Box>
            <TableContainer component={Paper} className={Styles.table}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Make</TableCell>
                    <TableCell align="right">Model</TableCell>
                    <TableCell align="right">Package</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row: any) => (
                    <Row key={row.id} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

};
