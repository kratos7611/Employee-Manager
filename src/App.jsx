import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Poppins',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
        </Routes>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
