import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const Tabla = ({
  rows
}: {
  rows: any;
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Make</StyledTableCell>
            <StyledTableCell align="left">Model</StyledTableCell>
            <StyledTableCell align="left">Package</StyledTableCell>
            <StyledTableCell align="left">Color</StyledTableCell>
            <StyledTableCell align="left">Year</StyledTableCell>
            <StyledTableCell align="left">Category</StyledTableCell>
            <StyledTableCell align="left">Mileage (mi)</StyledTableCell>
            <StyledTableCell align="left">Price (cents)</StyledTableCell>
            <StyledTableCell align="left">Id</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <StyledTableRow key={row.make}>
              <StyledTableCell component="th" scope="row">
                {row.model}
              </StyledTableCell>
              <StyledTableCell align="left">{row.package}</StyledTableCell>
              <StyledTableCell align="left">{row.color}</StyledTableCell>
              <StyledTableCell align="left">{row.year}</StyledTableCell>
              <StyledTableCell align="left">{row.category}</StyledTableCell>
              <StyledTableCell align="left">{row.mileage}</StyledTableCell>
              <StyledTableCell align="left">{row.price}</StyledTableCell>
              <StyledTableCell align="left">{row.id}</StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}