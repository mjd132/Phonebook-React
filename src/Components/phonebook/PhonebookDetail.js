import { Paper, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import useFetch from "../../API/useFetch";
import { WidthFullRounded } from "@mui/icons-material";

const PhonebookDetail = () => {
  const { id } = useParams();
  const { data: contact, isPending, error } = useFetch("contacts/" + id);
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
