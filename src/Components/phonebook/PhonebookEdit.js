import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Api from "../../API/Api";
import appSetting from "../../app.setting";

const PhonebookEdit = (props) => {
  const [contact, setContact] = useState(props.contact);
  const api = new Api(appSetting.api.url);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
    display: "block",
  };
  useEffect(() => {
    setContact(props.contact);
  }, []);

  return (
    <>
      {props.contact && (
        <Modal open={props.open} onClose={props.onClose}>
          <Box sx={style}>
            <TextField
              label="Name"
              variant="standard"
              value={contact.name}
              onChange={(e) =>
                setContact((c) => ({ ...c, name: e.target.value }))
              }
            ></TextField>
            <TextField
              label="Phone Number"
              variant="standard"
              value={contact.phoneNumber}
              onChange={(e) =>
                setContact((c) => ({ ...c, phoneNumber: e.target.value }))
              }
            ></TextField>
            <Button variant="contained" onClick={() => props.onSave(contact)}>
              Save
            </Button>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default PhonebookEdit;
