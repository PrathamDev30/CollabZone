import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";
import AddGroups from "../components/AddGroups";
import { Divider } from "@mui/material";

const Groups1 = () => {
  return (
    <div>
      <Header />
      <Box height={50} />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, display: "flex", p: 3 }}>
          <Box sx={{ flex: "0 0 20%", p: 2 }}>
            {/* Left Section: 20% */}
            {/* You can add content here if needed */}
            <span>Here Group Names will be mentioned</span>
            <Box height={10} />
            <AddGroups />
            <Box height={50} />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          {/* Vertical Divider */}
          <Box sx={{ flex: "0 0 70%", p: 2 }}>
            {/* Right Section: 70% */}
            <Box height={30} />
            <h1>This is Group Chat Window</h1>

            {/* You can add more content here */}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Groups1;
