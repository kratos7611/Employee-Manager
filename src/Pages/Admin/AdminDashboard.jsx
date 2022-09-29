import {
  Card,
  Box,
  CardContent,
  Grid,
  Stack,
  Typography,
  Button,
  ListItem,
  List,
} from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import UsersList from "../../components/UsersList/UsersList";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Chart3 from "../../components/Charts/LineChart/LineChart";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [usersNumber, setusersNumber] = useState(0);

  const pullData = (data) => {
    setusersNumber(data);
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
          <Typography
            variant="h3"
            fontSize="32px"
            fontWeight="bold"
            sx={{ mt: "30px", mb: "30px" }}
          >
            Hello Admin
          </Typography>

          <Grid container gap={3}>
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
                    <Stack direction="column">
                      <Typography variant="h5" color="#FE4C24" sx={{ p: 1 }}>
                        {usersNumber} Registered Users
                      </Typography>
                      <List>
                        <ListItem sx={{ color: "#fff" }}>hello</ListItem>
                      </List>
                    </Stack>
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
                  <Link to={"/employee/add"} style={{ textDecoration: 'none' }}>
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
                <UsersList function={pullData} />
              </Stack>
            </Box>
          </Card>
        </Box>
      </Grid>
    </Stack>
  );
};

export default AdminDashboard;
