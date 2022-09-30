import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { UsersService } from "../../../Services/UsersService";

const AddEmployee = () => {
  const navigate = useNavigate();
  const { employeeID } = useParams();

  const [state, setState] = useState({
    details: {
      firstName: "",
      lastName: "",
      photo: "",
      title: "",
      mobile: "",
      department: "",
    },
    errorMessage: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
      errors.firstName = "First Name Is Required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name Is Required";
    }
    if (!values.photo) {
      errors.photo = "Image URL is Required";
    }
    if (!values.title) {
      errors.title = "Job Title Is Required";
    }
    if (!values.mobile) {
      errors.mobile = "Contact Number Is Required";
    } else if (values.mobile.length < 10) {
      errors.mobile = "Contact No. has to be 10 digits";
    } else if (values.mobile.length > 10) {
      errors.mobile = "Contact No. has to be 10 digits";
    }
    if (!values.department) {
      errors.department = "Department Name Is Required";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const validated = async () => {
        try {
          let response = await UsersService.editEmployee(
            state.details,
            employeeID
          );
          if (response) {
            Swal.fire(
              "Updated!",
              "Employee Details Updated Succesfully",
              "success"
            );
            navigate("/admin");
          }
        } catch (error) {
          setState({ ...state });
        }
      };
      validated();
    }
  }, [formErrors]);

  const formSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(state.details));
    setIsSubmit(true);
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
            height: "93vh",
          }}
        >
          <Typography
            variant="h3"
            fontSize="32px"
            fontWeight="bold"
            sx={{ mt: "30px", mb: "30px" }}
          >
            Edit Employee Details
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
                  Enter Updated Employee Details
                </Typography>
              </Box>
              <Grid container justifyContent="space-evenly" sx={{ mt: "10px" }}>
                <Grid item>
                  <Box>
                    <TextField
                      required
                      label="First Name"
                      name="firstName"
                      value={state.details.firstName}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "error.main", mt: "10px" }}
                  >
                    {formErrors.firstName}
                  </Typography>
                </Grid>
                <Grid item>
                  <Box>
                    <TextField
                      required
                      label="Last Name"
                      name="lastName"
                      value={state.details.lastName}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "error.main", mt: "10px" }}
                  >
                    {formErrors.lastName}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-evenly" sx={{ mt: "10px" }}>
                <Grid item>
                  <Box>
                    <TextField
                      required
                      label="Photo URL"
                      name="photo"
                      value={state.details.photo}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "error.main", mt: "10px" }}
                  >
                    {formErrors.photo}
                  </Typography>
                </Grid>
                <Grid item>
                  <Box>
                    <TextField
                      required
                      label="Job Title"
                      name="title"
                      value={state.details.title}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "error.main", mt: "10px" }}
                  >
                    {formErrors.title}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-evenly" sx={{ mt: "10px" }}>
                <Grid item>
                  <Box>
                    <TextField
                      required
                      label="Contact No."
                      type="number"
                      name="mobile"
                      value={state.details.mobile}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "error.main", mt: "10px" }}
                  >
                    {formErrors.mobile}
                  </Typography>
                </Grid>
                <Grid item>
                  <Box>
                    <TextField
                      required
                      label="Department"
                      name="department"
                      value={state.details.department}
                      onChange={handleChange}
                    ></TextField>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "error.main", mt: "10px" }}
                  >
                    {formErrors.department}
                  </Typography>
                </Grid>
              </Grid>
              <Stack
                direction="column"
                alignItems="center"
                sx={{ p: 2 }}
                justifyContent="space-evenly"
              >
                <Button
                  sx={{ width: "250px", p: 1.5, mb: "20px", mt: "20px" }}
                  variant="contained"
                  onClick={formSubmit}
                >
                  Update Employee Details
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
