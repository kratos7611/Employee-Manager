import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddEmployee from "./Pages/Admin/AddEmployee/AddEmployee";
import ViewEmployee from "./Pages/Admin/ViewEmployee/ViewEmployee";
import EditEmployee from "./Pages/Admin/EditEmployee/EditEmployee";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
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
          <Route path={"/admin"} element={<AdminDashboard />} />
          <Route path={"/employees/add"} element={<AddEmployee />} />
          <Route
            path={"/employees/view/:employeeID"}
            element={<ViewEmployee />}
          />
          <Route
            path={"employees/edit/:employeeID"}
            element={<EditEmployee />}
          />
        </Routes>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
