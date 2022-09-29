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

const UsersList = (props) => {
  const [state, setState] = useState({
    contacts: [],
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await UsersService.getAllEmployees();
        setState({
          ...state,
          contacts: response.data,
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

  const data = Object.keys(state.contacts).length;

  props.function(data)

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
          {state.contacts.length > 0 &&
            state.contacts.map((contact) => {
              return (
                <TableRow key={contact.id}>
                  <TableCell className="table" component="th" scope="row">
                    {contact.firstName} {contact.lastName}
                  </TableCell>
                  <TableCell className="table" align="center">
                    {contact.title}
                  </TableCell>
                  <TableCell className="table" align="center">
                    {contact.department}
                  </TableCell>
                  <TableCell className="table" align="center">
                    {contact.mobile}
                  </TableCell>
                  <TableCell className="table" align="center">
                    <Button color='secondary' variant="contained">
                      <VisibilityIcon sx={{ fontSize: "20px" }} />
                    </Button>
                    <Button variant="contained" sx={{ ml:'10px' }}>
                      <EditIcon sx={{ fontSize: "20px" }} />
                    </Button>
                    <Button color='error' variant="contained" sx={{ ml:'10px' }}>
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
