import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import usePost from "../../API/usePost";
import appSetting from "../../app.setting";
import Api from "../../API/Api";
// import { data, phonebook, setPhonebook } from "../consts/data";

const PhonebookForm = () => {
  const [contact, setContact] = useState({ id: "", name: "", phoneNumber: "" });
  const api = new Api(appSetting.api.url);
  const handleAddContact = () => {
    console.log(contact);
    // const { isPending } = usePost("contacts", contact);
    api.post("/contacts", contact).catch((err) => console.log(err.message));

    setContact({ id: "", name: "", phoneNumber: "" });
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
