import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Text,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
const Settings_card = () => {
  return (
    <Box
      display="grid"
      w="343px"
      gridTemplateRows="repeat(2, 65px) repeat(2,38px)"
      ml="16px"
      mt="20px"
      rowGap="20px"
      h="266px"
    >
      <Box display="grid" rowGap="4px">
        <Menu>
          <Text color="#475569" fontWeight="bold">
            Reçevoir des notifications via l'application
          </Text>
          <MenuButton
            as={Button}
            w="343px"
            className="chevron"
            backgroundColor="#F1F5F9"
            borderRadius="4px"
          >
            <Text color="#94A3B8" fontWeight="bold">
              Oui
            </Text>
            <Image
              src="./assets/settings_card/chevron-down.svg"
              alt="chevron down"
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Oui</MenuItem>
            <MenuItem>Non</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box display="grid" rowGap="4px">
        <Menu>
          <Text color="#475569" fontWeight="bold">
            Afficher mon numéro sur mon profil
          </Text>
          <MenuButton
            as={Button}
            w="343px"
            className="chevron"
            backgroundColor="#F1F5F9"
            borderRadius="4px"
          >
            <Text color="#94A3B8" fontWeight="bold">
              Oui
            </Text>
            <Image
              src="./assets/settings_card/chevron-down.svg"
              alt="chevron down"
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Oui</MenuItem>
            <MenuItem>Non</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Button
        w="343px"
        backgroundColor="#E11D48"
        color="white"
        fontWeight="bold"
        borderRadius="4px"
      >
        Désactiver mon compte
      </Button>
      <Button
        w="343px"
        backgroundColor="#E11D48"
        color="white"
        fontWeight="bold"
        borderRadius="4px"
      >
        Supprimer mon compte
      </Button>
    </Box>
  );
};

export default Settings_card;
