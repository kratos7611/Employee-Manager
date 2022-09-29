import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/system";

const UsersList = () => {
  return (
    <Card sx={{ backgroundColor: "#0F1322", flex: 2, borderRadius: "20px" }}>
      <List sx={{ p: 3 }}>
        <ListItem disablePadding sx={{ p:'2px' }}>
          <Typography variant="body1" fontSize="18px" color="#fff">
            Ruson Maharjan
          </Typography>
          <Stack direction="row" sx={{ ml: "auto" }}>
            <ListItemButton>
              <ListItemIcon>
                <VisibilityIcon
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    fontSize: "20px",
                    border: "#fff 1px solid",
                    borderRadius: "5px",
                    p: "5px",
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <EditIcon
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    fontSize: "20px",
                    border: "#fff 1px solid",
                    borderRadius: "5px",
                    p: "5px",
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <DeleteIcon
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    fontSize: "20px",
                    border: "#fff 1px solid",
                    borderRadius: "5px",
                    p: "5px",
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
          </Stack>
        </ListItem >
        <Divider sx={{ borderColor: "#5e5e5e", width: "97%", p:'5px'  }} />
        <ListItem disablePadding sx={{ p:'2px' }}>
          <Typography variant="body1" fontSize="18px" color="#fff">
            Subash Neupane
          </Typography>
          <Stack direction="row" sx={{ ml: "auto" }}>
            <ListItemButton>
              <ListItemIcon>
                <VisibilityIcon
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    fontSize: "20px",
                    border: "#fff 1px solid",
                    borderRadius: "5px",
                    p: "5px",
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <EditIcon
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    fontSize: "20px",
                    border: "#fff 1px solid",
                    borderRadius: "5px",
                    p: "5px",
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <DeleteIcon
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    fontSize: "20px",
                    border: "#fff 1px solid",
                    borderRadius: "5px",
                    p: "5px",
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
          </Stack>
        </ListItem>
        <Divider sx={{ borderColor: "#5e5e5e", width: "97%", p:'5px' }} />
      </List>
    </Card>
  );
};

export default UsersList;
