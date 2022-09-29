import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/system";
import { UsersService } from "../../Services/UsersService";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [state, setState] = useState({
    employees: [],
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await UsersService.getAllEmployees();
        setState({
          ...state,
          employees: response.data,
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

  // const data = Object.keys(state.employees).length;

  // props.function(data);

  return (
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
          {state.employees.length > 0 &&
            state.employees.map((employee) => {
              return (
                <TableRow key={employee.id}>
                  <TableCell className="table" component="th" scope="row">
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
                    <Link to={`/employees/view/${employee.id}`} style={{ textDecoration:'none' }}>
                      <Button color="secondary" variant="contained">
                        <VisibilityIcon sx={{ fontSize: "20px" }} />
                      </Button>
                    </Link>
                    <Button variant="contained" sx={{ ml: "10px" }}>
                      <EditIcon sx={{ fontSize: "20px" }} />
                    </Button>
                    <Button
                      color="error"
                      variant="contained"
                      sx={{ ml: "10px" }}
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
  );
};

export default UsersList;
