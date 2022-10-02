import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Paper,
  Stack,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { UsersService } from "../../Services/UsersService";

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    employees: [],
    errorMessage: "",
    filteredEmployees: [],
  });

  const [formData, seFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [formErrors, setFormErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    return seFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    state.employees.map((employee) => {
      if (
        employee.email === formData.email &&
        employee.password === formData.password &&
        employee.role === formData.role
      ) {
        navigate ("/admin")
      } else {
        setFormErrors({
          emailError:"Invalid E-mail",
          passwordError: "Invalid Password"
        })
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await UsersService.getAllEmployees();
        setState({
          ...state,
          employees: response.data,
          filteredEmployees: response.data,
        });
      } catch (error) {
        setState({
          ...state,
          errorMessage: "Sorry! Ran into an error",
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="login">
      <Box sx={{ mt: "50px", ml: "120px" }}>
        <img src="../../public/logo.png" alt="logo" width="220px" />
      </Box>
      <Stack alignItems="center" direction="row">
        <Paper
          component="form"
          onSubmit={handleSubmit}
          align="center"
          elevation={7}
          sx={{
            width: "40%",
            ml: "100px",
            mt: "60px",
            borderRadius: "30px",
          }}
        >
          <Box sx={{ p: 2, mt: "20px" }}>
            <Typography variant="h5" color="#0F1322">
              Login To Your Account
            </Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <TextField
              sx={{ width: "70%" }}
              label="Enter Your E-mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></TextField>
          </Box>
          <Typography
            variant="subtitle2"
            sx={{ color: "error.main"}}
          >
            {formErrors.emailError}
          </Typography>
          <Box sx={{ p: 2 }}>
            <TextField
              id="outlined-password-input"
              type="password"
              sx={{ width: "70%" }}
              label="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            ></TextField>
          </Box>
          <Typography
            variant="subtitle2"
            sx={{ color: "error.main"}}
          >
            {formErrors.passwordError}
          </Typography>
          <FormControl sx={{ width: "40%", mt: "15px" }}>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="role"
              value={formData.role}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"user"}>User</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ p: 2 }}>
            <Button
              sx={{ width: "50%", p: 1.5, mb: "20px", mt: "20px" }}
              variant="contained"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Box>
        </Paper>
        <Box sx={{ width: "20px", ml: "100px", mt: "70px" }}>
          <img src="../../../public/office.jpg" alt="" width="700px" />
        </Box>
      </Stack>
    </div>
  );
};

export default Login;
