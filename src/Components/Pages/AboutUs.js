import { Paper, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h4" fontWeight={"bold"}>
        About Us
      </Typography>
      <Typography variant="h6">Developed by Majid Abbasi</Typography>
    </Paper>
  );
};

export default AboutUs;
