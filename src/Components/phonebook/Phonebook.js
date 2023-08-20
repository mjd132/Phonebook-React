import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Phonebook.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { red } from "@mui/material/colors";
import appSetting from "../../app.setting";
import Api from "../../API/Api";
import PhonebookEdit from "./PhonebookEdit";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  padding: 8,
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
  const api = new Api(appSetting.api.url);
  const [phonebook, setPhonebook] = useState(null);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [contactForEdit, setContactForEdit] = useState(null);
  let navigate = useNavigate();

  const route = (id) => {
    navigate(`/contact/${id}`);
  };

  useEffect(() => {
    api
      .get("/contacts")
      .then((data) => setPhonebook(data))
      .catch((error) => setError(error.message));
  }, []);

  const deleteContact = (e, id) => {
    e.stopPropagation();
    api
      .delete(`/contacts/${id}`)
      .then(() => {
        setPhonebook(phonebook.filter((item) => item.id !== id));
      })
      .catch((err) => setError(err.message));
  };

  const handleEditContact = (e, contact) => {
    e.stopPropagation();
    if (contact == null) return;
    setContactForEdit(contact);
    setOpenModal(true);
  };
  const handleOnClose = (contact) => {
    setOpenModal(false);
    console.log(contact);
  };
  const handleOnSave = (contact) => {
    if (JSON.stringify(contactForEdit) === JSON.stringify(contact)) {
      setOpenModal(false);
      return;
    }
    api
      .put(`/contacts/${contact.id}`, contact)
      .then((updatedItemData) => {
        const updatedData = phonebook.map((item) => {
          if (item.id === contact.id) {
            return {
              ...item,
              name: updatedItemData.name,
              phoneNumber: updatedItemData.phoneNumber,
            };
          }
          return item;
        });
        setPhonebook(updatedData);
      })
      .catch((error) => setError(error.message));
    setOpenModal(false);
  };
  return (
    <>
      {error && <Typography sx={{ color: red[700] }}>error</Typography>}
      {!error && (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>No.</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Phone Number</StyledTableCell>
                <StyledTableCell sx={{ width: 120 }}></StyledTableCell>
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
                    <StyledTableCell>
                      {p.phoneNumber}
                      {"   "}
                    </StyledTableCell>
                    <StyledTableCell>
                      <IconButton onClick={(e) => deleteContact(e, p.id)}>
                        <DeleteIcon sx={{ color: red[800] }} />
                      </IconButton>
                      <IconButton onClick={(e) => handleEditContact(e, p)}>
                        <EditIcon />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
          {openModal && (
            <PhonebookEdit
              open={openModal}
              onClose={handleOnClose}
              onSave={handleOnSave}
              contact={contactForEdit}
              setContact={setContactForEdit}
            />
          )}
        </TableContainer>
      )}
    </>
  );
};

export default Phonebook;
