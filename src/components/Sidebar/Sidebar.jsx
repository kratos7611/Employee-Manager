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
import { Box } from "@mui/system";

// , height: "100vh"

const Sidebar = () => {
  return (
    <div>
      <Box>
        <Stack direction="column" sx={{ p: 3, flex:4 }} align="center">
          <Typography variant="h6">EMS</Typography>

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
