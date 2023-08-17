import { Paper, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h4" fontWeight={"bold"}>
        Your Profile
      </Typography>
      <Typography variant="h6">Name: Your Name</Typography>
    </Paper>
  );
};

export default Profile;
