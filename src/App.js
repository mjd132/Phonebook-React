import "./App.css";
import { Box, Card, Container, Grid, Paper, Typography } from "@mui/material";
import DrawerLeft from "./Components/drawer/DrawerLeft";
import Phonebook from "./Components/phonebook/Phonebook";
import PhonebookForm from "./Components/PhonebookForm/PhonebookForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import PhonebookDetail from "./Components/phonebook/PhonebookDetail";
import Profile from "./Components/Pages/Profile";
import AboutUs from "./Components/Pages/AboutUs";
function App() {
  return (
    <BrowserRouter>
      <Grid container>
        <DrawerLeft item />
        <Grid item xs={3}></Grid>
        <Grid item xs={8} sx={{ py: "5pt" }}>
          <Routes>
            <Route path="/add-contact" element={<PhonebookForm />} />
            <Route path="/" exacte Component={Homepage} />
            <Route path="/contact/:id" exacte element={<PhonebookDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
