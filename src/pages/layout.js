import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";

const headerLayout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Search />
    </Box>
  );
};

export default headerLayout;
