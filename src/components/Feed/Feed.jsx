import {
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarsIcon from "@mui/icons-material/Stars";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import React from "react";
import PieChart from "../Charts/PieChart/PieChart";
import Chart2 from "../Charts/BarChart/BarChart";

const Feed = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: "#F3F1EF", borderRadius: "50px" }}>
      <Typography
        variant="h3"
        fontSize="32px"
        fontWeight="bold"
        sx={{ mt: "30px", mb: "30px" }}
      >
        Hello Nischal
      </Typography>
      <Grid container gap={3}>
        <Card
          sx={{ backgroundColor: "#0F1322", flex: 2, borderRadius: "20px" }}
        >
          <CardContent>
            <Typography
              variant="h5"
              color="#fff"
              fontWeight="bold"
              sx={{ p: 1 }}
            >
              Your Performance
            </Typography>
            <Box>
              <Grid container sx={{ mt: "20px", textAlign: "center" }}>
                <Stack sx={{ alignItems: "center", margin: "auto" }}>
                  <Typography variant="h4" color="#fff">
                    89%
                  </Typography>
                  <Typography variant="subtitle2" fontSize="10px" color="#fff">
                    Task completion
                  </Typography>
                </Stack>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderWidth: "1px", borderColor: "#fff" }}
                />
                <Stack sx={{ alignItems: "center", margin: "auto" }}>
                  <Typography variant="h4" color="#fff">
                    46%
                  </Typography>
                  <Typography variant="subtitle2" fontSize="10px" color="#fff">
                    Social Connection
                  </Typography>
                </Stack>
              </Grid>
              <Box sx={{ mt: "20px", p: 2 }}>
                <List>
                  <ListItem sx={{ p: "3px" }}>
                    <ListItemIcon>
                      <CheckCircleIcon
                        sx={{ color: "#fff", fontSize: "30px" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Attendance Recorded"
                      sx={{ color: "#fff" }}
                    />
                  </ListItem>
                  <ListItem sx={{ p: "3px" }}>
                    <ListItemIcon>
                      <StarsIcon sx={{ color: "#fff", fontSize: "30px" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Achievements Recorded"
                      sx={{ color: "#fff" }}
                    />
                  </ListItem>
                  <ListItem sx={{ p: "3px" }}>
                    <ListItemIcon>
                      <ErrorRoundedIcon
                        sx={{ color: "#fff", fontSize: "30px" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Issues Recorded"
                      sx={{ color: "#fff" }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{ backgroundColor: "#bbeaf0", flex: 5, borderRadius: "20px" }}
        >
          <CardContent sx={{ mt: "10px" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ p: 2 }}
            >
              <List>
                <Typography
                  variant="h4"
                  sx={{ pb: 2, mb: "10px" }}
                  fontWeight="bold"
                >
                  Your Activity
                </Typography>
                <ListItem sx={{ p: "3px" }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#000", fontSize: "30px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Caught Up With Tasks"
                    sx={{ color: "#000" }}
                  />
                </ListItem>
                <ListItem sx={{ p: "3px" }}>
                  <ListItemIcon>
                    <StarsIcon sx={{ color: "#000", fontSize: "30px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Submitted Reports"
                    sx={{ color: "#000" }}
                  />
                </ListItem>
                <ListItem sx={{ p: "3px" }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#000", fontSize: "30px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Attended Client Meeting"
                    sx={{ color: "#000" }}
                  />
                </ListItem>
                <ListItem sx={{ p: "3px" }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#000", fontSize: "30px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reported Bugs"
                    sx={{ color: "#000" }}
                  />
                </ListItem>
              </List>
              <PieChart />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Card
        sx={{ backgroundColor: "#DABDA9", mt: "20px", borderRadius: "20px" }}
      >
        <CardContent>
          <Stack direction="column" gap={2}>
            <Box sx={{ ml: "50px" }}>
              <Typography variant="h4" fontWeight="bold" sx={{ p: 2 }}>
                Your Progress
              </Typography>
            </Box>
            <Chart2 />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Feed;
