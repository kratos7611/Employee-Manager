import {
  Card,
  Box,
  CardContent,
  Grid,
  Stack,
  Typography,
  Button,
  ListItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  List,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  TableContainer,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ReportIcon from "@mui/icons-material/Report";
import StarsIcon from "@mui/icons-material/Stars";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Chart3 from "../../components/Charts/LineChart/LineChart";
import { Link } from "react-router-dom";
import { UsersService } from "../../Services/UsersService";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const AdminDashboard = () => {
  const [state, setState] = useState({
    employees: [],
    errorMessage: "",
    filteredEmployees: [],
  });

  const [query, setquery] = useState({
    text: "",
  });

  const searchEmployee = (event) => {
    setquery({ ...query, text: event.target.value });

    let searchedEmployee = state.employees.filter((employee) => {
      return employee.firstName
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setState({ ...state, filteredEmployees: searchedEmployee });
    console.log(searchedEmployee);
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

  const swalFire = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Employee data has been removed", "success");
        clickDelete(id);
      }
    });
  };

  const clickDelete = async (employeeID) => {
    try {
      let response = await UsersService.deleteEmployee(employeeID);
      if (response) {
        let response = await UsersService.getAllEmployees();
        setState({
          ...state,
          employees: response.data,
          filteredEmployees: response.data,
        });
      }
    } catch (error) {
      setState({ ...state, errorMessage: "Sorry! Error" });
    }
  };

  return (
    <Stack direction="row">
      <Grid container>
        <Sidebar />
        <Box
          sx={{
            p: 3,
            flex: 9,
            backgroundColor: "#F3F1EF",
            borderRadius: "50px",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h3"
              fontSize="32px"
              fontWeight="bold"
              sx={{ mt: "30px", mb: "30px" }}
            >
              Hello Admin
            </Typography>
            <TextField
              sx={{ backgroundColor: "#fff" }}
              label="Search..."
              name="text"
              value={query.text}
              onChange={searchEmployee}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonSearchIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Stack>

          <Grid container gap={3} sx={{ mt: "20px" }}>
            <Card
              sx={{ backgroundColor: "#0F1322", flex: 4, borderRadius: "20px" }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  color="#fff"
                  fontWeight="bold"
                  sx={{ p: 1 }}
                >
                  Total Users
                </Typography>
                <Box>
                  <Grid container sx={{ mt: "5px", textAlign: "center" }}>
                    <Typography variant="h5" color="#FE4C24" sx={{ p: 1 }}>
                      {state.employees.length} Registered User(s)
                    </Typography>
                    <List>
                      <ListItem sx={{ color: "#fff" }}>
                        <ListItemIcon>
                          <ReportIcon
                            sx={{ color: "#fff", fontSize: "30px" }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="4 Pending User Confirmations" />
                      </ListItem>
                      <ListItem sx={{ color: "#fff" }}>
                        <ListItemIcon>
                          <StarsIcon sx={{ color: "#fff", fontSize: "30px" }} />
                        </ListItemIcon>
                        <ListItemText primary="0 Issues Recorded" />
                      </ListItem>
                      <ListItem sx={{ color: "#fff" }}>
                        <ListItemIcon>
                          <CheckCircleIcon
                            sx={{ color: "#fff", fontSize: "30px" }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Tasks completion Recorded" />
                      </ListItem>
                    </List>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
            <Card
              sx={{ backgroundColor: "#bbeaf0", flex: 6, borderRadius: "20px" }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  color="#000"
                  fontWeight="bold"
                  sx={{ p: 1 }}
                >
                  User Growth
                </Typography>
                <Box>
                  <Grid container sx={{ mt: "20px", textAlign: "center" }}>
                    <Stack sx={{ alignItems: "center", margin: "auto" }}>
                      <Chart3 />
                    </Stack>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Card
            sx={{
              backgroundColor: "#302f2f",
              p: 2,
              flex: 2,
              borderRadius: "20px",
              mt: 4,
            }}
          >
            <Box>
              <Stack direction="column">
                <Stack direction="row" justifyContent="space-between">
                  <Typography
                    variant="h3"
                    fontSize="32px"
                    fontWeight="bold"
                    color="white"
                    sx={{ mt: "30px" }}
                  >
                    Users list
                  </Typography>
                  <Link to={"/employees/add"}>
                    <Button
                      sx={{ ml: "20px", mt: "25px" }}
                      size="large"
                      variant="contained"
                      color="success"
                    >
                      <AddCircleIcon sx={{ fontSize: "17px", p: 1 }} />
                      Add User
                    </Button>
                  </Link>
                </Stack>
                <TableContainer sx={{ mt: "10px" }}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="table">Name</TableCell>
                        <TableCell className="table" align="center">
                          Job Title
                        </TableCell>
                        <TableCell className="table" align="center">
                          Department
                        </TableCell>
                        <TableCell className="table" align="center">
                          Contact
                        </TableCell>
                        <TableCell className="table" align="center">
                          Actions
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {state.filteredEmployees.length > 0 &&
                        state.filteredEmployees.map((employee) => {
                          return (
                            <TableRow key={employee.id}>
                              <TableCell
                                className="table"
                                component="th"
                                scope="row"
                              >
                                {employee.firstName} {employee.lastName}
                              </TableCell>
                              <TableCell className="table" align="center">
                                {employee.title}
                              </TableCell>
                              <TableCell className="table" align="center">
                                {employee.department}
                              </TableCell>
                              <TableCell className="table" align="center">
                                {employee.mobile}
                              </TableCell>
                              <TableCell className="table" align="center">
                                <Link
                                  to={`/employees/view/${employee.id}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Button color="secondary" variant="contained">
                                    <VisibilityIcon sx={{ fontSize: "20px" }} />
                                  </Button>
                                </Link>
                                <Link to={`/employees/edit/${employee.id}`}>
                                  <Button
                                    variant="contained"
                                    sx={{ ml: "10px" }}
                                  >
                                    <EditIcon sx={{ fontSize: "20px" }} />
                                  </Button>
                                </Link>
                                <Button
                                  color="error"
                                  variant="contained"
                                  sx={{ ml: "10px" }}
                                  onClick={() => {
                                    swalFire(employee.id);
                                  }}
                                >
                                  <DeleteIcon sx={{ fontSize: "20px" }} />
                                </Button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
            </Box>
          </Card>
        </Box>
      </Grid>
    </Stack>
  );
};

export default AdminDashboard;
