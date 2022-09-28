import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const [formData, seFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    return seFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/dashboard");
  };

  return (
    <div className="login">
      <Stack alignItems="center" direction="row">
        <Paper
          component="form"
          onSubmit={handleSubmit}
          align="center"
          elevation={3}
          sx={{
            width: "40%",
            ml: "100px",
            mt: "150px",
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
          <Box sx={{ p: 2 }}>
            <TextField
              sx={{ width: "70%" }}
              label="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            ></TextField>
          </Box>
          <Box sx={{ ml: "110px" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Me"
              />
            </FormGroup>
          </Box>
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
