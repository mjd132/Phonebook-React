import { Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../../API/useFetch";
import { WidthFullRounded } from "@mui/icons-material";
import appSetting from "../../app.setting";
import Api from "../../API/Api";

const PhonebookDetail = () => {
  const { id } = useParams();
  const api = new Api(appSetting.api.url);
  const [contact, setContact] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/contacts/${id}`)
      .then((data) => setContact(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {contact && (
        <Paper sx={{ padding: 2, width: "fit-content" }}>
          <Typography variant="h4" fontWeight={"bold"} component="p">
            {contact.name}
          </Typography>
          <Typography variant="h6" component="p">
            Phone: {contact.phoneNumber}
          </Typography>
        </Paper>
      )}
    </>
  );
};

export default PhonebookDetail;
