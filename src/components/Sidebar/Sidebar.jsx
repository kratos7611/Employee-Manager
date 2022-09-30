import React from "react";
// import '../../index.css'
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleIcon from '@mui/icons-material/People';
import { Box } from "@mui/system";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  const swalFire = () => {
    Swal.fire({
      title: "Confirm Logging Out ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log out",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logged Out Sccesfully!");
        navigate ("/")
      }
    });
  };

  return (
    <div>
      <Box>
        <Stack direction="column" sx={{ p: 3, flex:2, ml:'10px', mr:'10px'}} align="center">
          <Box sx={{ mt:'10px' }}>
          <Link to={"/admin"} style={{ textDecoration:'none' }}>
            <img src="../../public/logo.png" alt="logo" width="220px" />
          </Link>
          </Box>
          <Box sx={{ mt: "100px" }}>
            <img
              src="../../../public/contact demo.png"
              alt="conatct image"
              width="100px"
            />
          </Box>
          <Typography variant="h6" fontWeight="bold" sx={{ p: 2 }}>
            Nischal Adhikari
          </Typography>

          <Box
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              mt: "10px",
            }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountCircleIcon sx={{ fontSize: "1.8em" }} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PeopleIcon sx={{ fontSize: "1.8em" }} />
                    </ListItemIcon>
                    <ListItemText primary="View Collegues" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={swalFire}>
                    <ListItemIcon>
                      <LogoutIcon sx={{ fontSize: "1.8em" }} />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
                
              </List>
            </nav>
            <Divider />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Sidebar;
