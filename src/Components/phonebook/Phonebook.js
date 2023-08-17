import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useFetch from "../../API/useFetch";
import { useNavigate } from "react-router-dom";
import "./Phonebook.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  cursor: "pointer",
}));

const Phonebook = () => {
  const { data: phonebook, isPending, error } = useFetch("contacts");
  error && console.log(error);

  let navigate = useNavigate();
  const route = (id) => {
    navigate(`/contact/${id}`);
  };

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>No.</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Phone Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="contactsTable">
          {phonebook &&
            phonebook.map((p) => (
              <StyledTableRow key={p.id} onClick={(e) => route(p.id)}>
                <StyledTableCell component="th" scope="row">
                  {p.id}
                </StyledTableCell>
                <StyledTableCell>{p.name}</StyledTableCell>
                <StyledTableCell>{p.phoneNumber}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Phonebook;
