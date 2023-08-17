import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
// import { data, phonebook, setPhonebook } from "../consts/data";

const PhonebookForm = () => {
  const [contact, setContact] = useState({ name: "", phoneNumber: "" });
  const handleAddContact = () => {
    // setPhonebook(...phonebook, {
    //   no: phonebook.length,
    //   name: name,
    //   phoneNumber: phoneNumber,
    // });
    console.log(contact);
    setContact({ name: "", phoneNumber: "" });
  };

  return (
    <Grid my={2} elevation={3}>
      <Paper sx={{ display: "flex" }}>
        <TextField
          sx={{ margin: 1 }}
          variant="standard"
          label="Name"
          value={contact.name}
          onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
        ></TextField>
        <TextField
          sx={{ margin: 1 }}
          variant="standard"
          label="Phone Number"
          value={contact.phoneNumber}
          onChange={(e) =>
            setContact((c) => ({ ...c, phoneNumber: e.target.value }))
          }
        ></TextField>
        {
          <Button
            variant="contained"
            sx={{ alignSelf: "center" }}
            onClick={handleAddContact}
          >
            Add Contact
          </Button>
        }
      </Paper>
    </Grid>
  );
};

export default PhonebookForm;
