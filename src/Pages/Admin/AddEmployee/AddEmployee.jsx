import {
  Button,
  Card,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { UsersService } from "../../../Services/UsersService";

const AddEmployee = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    details: {
      firstName: "",
      lastName: "",
      photo: "",
      title: "",
      mobile: "",
      department: "",
      email: "",
      password: "",
    },
    errorMessage: ""
  });

  const handleChange = (event) => {
    const {} = event;
    setState({
      ...state,
      details: {
        ...state.details,
        [event.target.name]: event.target.value,
      },
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await UsersService.addEmployee(state.details);
      if (response) {
        // alert("Employee Added")
        Swal.fire(
            'Added!',
            'Employee Added Succesfully',
            'success'
          )
        navigate("/admin");
      }
    } catch (error) {
      setState({ ...state });
    }
  };

  return (
    <Stack>
      <Grid container>
        <Sidebar />
        <Box
          sx={{
            p: 3,
            flex: 9,
            backgroundColor: "#F3F1EF",
            borderRadius: "50px",
            height: "95vh",
          }}
        >
          <Typography
            variant="h3"
            fontSize="32px"
            fontWeight="bold"
            sx={{ mt: "30px", mb: "30px" }}
          >
            Add A New Employee
          </Typography>
          <Box direction="row">
            <Paper
              component="form"
              align="center"
              elevation={3}
              onSubmit={formSubmit}
              sx={{
                width: "45%",
                ml: "auto",
                mr: "auto",
                mt: "70px",
                borderRadius: "30px",
              }}
              success={state.formSuccess}
              error={state.formError}
            >
              <Box sx={{ p: 2, mt: "20px" }}>
                <Typography variant="h5" color="#0F1322" fontWeight="bold">
                  Enter Employee Details
                </Typography>
              </Box>
              <Grid container justifyContent="space-evenly" sx={{ mt: "10px" }}>
                <Grid item>
                  <Box>
                    <TextField
                      label="First Name"
                      name="firstName"
                      value={state.details.firstName}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                </Grid>
                <Grid item>
                  <Box>
                    <TextField
                      label="Last Name"
                      name="lastName"
                      value={state.details.lastName}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-evenly" sx={{ mt: "10px" }}>
                <Grid item>
                  <Box>
                    <TextField
                      label="Photo URL"
                      name="photo"
                      value={state.details.photo}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                </Grid>
                <Grid item>
                  <Box>
                    <TextField
                      label="Job Title"
                      name="title"
                      value={state.details.title}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-evenly" sx={{ mt: "10px" }}>
                <Grid item>
                  <Box>
                    <TextField
                      label="Contact No."
                      type="number"
                      name="mobile"
                      value={state.details.mobile}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                </Grid>
                <Grid item>
                  <Box>
                    <TextField
                      label="Department"
                      name="department"
                      value={state.details.department}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-evenly" sx={{ mt: "10px" }}>
                <Grid item>
                  <Box>
                    <TextField
                      label="E-mail Address"
                      type="email"
                      name="email"
                      value={state.details.email}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                </Grid>
                <Grid item>
                  <Box>
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      value={state.details.password}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                </Grid>
              </Grid>
              <Stack
                direction="column"
                alignItems="center"
                sx={{ p: 2 }}
                justifyContent="space-evenly"
              >
                <Button
                  sx={{ width: "200px", p: 1.5, mb: "20px", mt: "20px" }}
                  variant="contained"
                  onClick={formSubmit}
                >
                  Add New Employee
                </Button>
                <Link to={"/admin"} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{ width: "100%", p: 1.5, mb: "20px" }}
                    variant="contained"
                    color="error"
                  >
                    Cancel &rarr;
                  </Button>
                </Link>
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Grid>
    </Stack>
  );
};

export default AddEmployee;
