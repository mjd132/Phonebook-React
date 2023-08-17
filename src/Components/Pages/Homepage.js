import { Grid } from "@mui/material";
import React from "react";
import Phonebook from "../phonebook/Phonebook";

const Homepage = () => {
  return (
    <React.Fragment>
      <Grid>
        <Phonebook />
      </Grid>
    </React.Fragment>
  );
};

export default Homepage;
