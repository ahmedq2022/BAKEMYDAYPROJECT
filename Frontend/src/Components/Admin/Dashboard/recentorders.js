import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { API_BASE_URL } from "../../../config";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

export default function Recentorders() {
  const [data, setdata] = useState([]);

  const getMyOrders = () => {
    axios
      .get(API_BASE_URL + "getallorderswithoutstatus/")
      .then(res => {
        setdata(res.data);
      })
      .catch(err => alert(err));
  };

  useEffect(() => {
    getMyOrders();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order Date</StyledTableCell>
            <StyledTableCell align="right">Cakename</StyledTableCell>
            <StyledTableCell align="right">Price&nbsp;($)</StyledTableCell>
            <StyledTableCell align="right">Quantity&nbsp;(kg)</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Mobile</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) =>
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.currentDate}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.cakeName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.amount}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.quantity}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.orderStatus}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.username}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.mobile}
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
