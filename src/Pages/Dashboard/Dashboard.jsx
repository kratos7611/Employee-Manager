import { Stack, Box } from "@mui/system";
import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

const Dashboard = () => {
  return (
    <Stack direction="row">
      <Sidebar />
      <Feed />
    </Stack>
  );
};

export default Dashboard;
