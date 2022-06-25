import {
  Wrap,
  WrapItem,
  Box,
  Image,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box
      width="344"
      height="42"
      display="flex"
      justifyContent="space-between"
      padding="16px"
    >
      <Image src="Logo.png" alt="Logo" width="32px" height="34px" />
      <Wrap width="40px" height="40px">
        <WrapItem>
          <Avatar
            name="Dan Abrahmov"
            src="profil_1.png"
            width="40px"
            height="40px"
          />
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default Header;
