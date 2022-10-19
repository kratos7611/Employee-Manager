import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/AdminSidebar";
import { UsersService } from "../../../Services/UsersService";

const ViewEmployee = () => {
  const { employeeID } = useParams();

  const [state, setState] = useState({
    details: {},
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await UsersService.getEmployee(employeeID);
        setState({
          ...state,
          details: response.data,
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
    <Stack direction="row">
      <Grid container>
        <Sidebar />
        <Box
          sx={{
            p: 3,
            flex: 9,
            height: "93vh",
            backgroundColor: "#F3F1EF",
            borderRadius: "50px",
          }}
        >
          <Typography
            variant="h3"
            fontSize="32px"
            fontWeight="bold"
            sx={{ mt: "30px", mb: "30px" }}
          >
            Employee Details
          </Typography>
          <Box direction="row">
            <Card
              elevation={5}
              sx={{
                width: "90%",
                ml: "auto",
                mr: "auto",
                mt: "80px",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                height="500px"
                sx={{ flex: 5 }}
                image={state.details.photo}
              ></CardMedia>
              <CardContent sx={{ flex: 5 }}>
                <List>
                  <ListItem>
                    <Typography variant="h6" fontWeight="bold">
                      Name
                    </Typography>
                    <Typography variant="h6">
                      : {state.details.firstName} {state.details.lastName}
                    </Typography>
                  </ListItem>
                  <Divider sx={{ p: "2px" }} />
                  <ListItem>
                    <Typography variant="h6" fontWeight="bold">
                      E-mail Address
                    </Typography>
                    <Typography variant="h6">
                      : {state.details.email}
                    </Typography>
                  </ListItem>
                  <Divider sx={{ p: "2px" }} />
                  <ListItem>
                    <Typography variant="h6" fontWeight="bold">
                      Contact Number
                    </Typography>
                    <Typography variant="h6">
                      {" "}
                      : {state.details.mobile}
                    </Typography>
                  </ListItem>
                  <Divider sx={{ p: "2px" }} />
                  <ListItem>
                    <Typography variant="h6" fontWeight="bold">
                      Job Title
                    </Typography>
                    <Typography variant="h6">
                      : {state.details.title}
                    </Typography>
                  </ListItem>
                  <Divider sx={{ p: "2px" }} />
                  <ListItem>
                    <Typography variant="h6" fontWeight="bold">
                      Department
                    </Typography>
                    <Typography variant="h6">
                      : {state.details.department}
                    </Typography>
                  </ListItem>
                </List>
                <Link to={"/admin"} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ mt: "60px", ml: "15px" }}
                  >
                    &larr; Back
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Grid>
    </Stack>
  );
};

export default ViewEmployee;
