import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
const Network = () => {
  return (
    <Box>
      <Text
        ml="1em"
        fontWeight="bold"
        mt="1.25em"
        mb="3.75em"
        fontSize="0.875em"
      >
        Réseau
      </Text>
      <Box display="flex" justifyContent="center">
        <Box w="17.1875em" h="13.3em">
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            top="36%"
            left="38%"
            size="lg"
          />

          <Avatar
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
            size="md"
            top="2.1em"
            right="0.3em"
          />

          <Avatar
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            size="md"
            top="0.6em"
            left="1.7em"
          />

          <Avatar
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
            size="md"
            top="4em"
            left="1.6em"
          />

          <Avatar
            name="Prosper Otemuyiwa"
            src="https://bit.ly/prosper-baba"
            size="md"
            top="7.5em"
            right="1.7em"
          />
          <Avatar
            name="Prosper Otemuyiwa"
            src="https://bit.ly/prosper-baba"
            size="md"
            top="2.5em"
            left="2.5em"
          />
          <Avatar
            name="Prosper Otemuyiwa"
            src="https://bit.ly/prosper-baba"
            size="md"
            top="4.5em"
            left="2.5em"
          />
          <Avatar
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
            size="sm"
            top="0.7em"
            right="5.8em"
          />
          <Avatar
            name="Segun Adebayo"
            src="./assets/job_pics/large-home-g4446d6391_1280.jpg"
            size="xs"
            top="5.5em"
            right="13.3em"
          />
          <Avatar
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            size="xs"
            top="12em"
            right="12.5em"
          />
          <Avatar
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            size="xs"
            top="12.7em"
            right="3em"
          />
          <Avatar
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            size="xs"
            top="10.3em"
            left="5.4em"
          />
          <Avatar
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            size="xs"
            bottom="6.6em"
            right="14em"
          />
          <Avatar
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            size="xs"
            bottom="2em"
            right="2em"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Network;
