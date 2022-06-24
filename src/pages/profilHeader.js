import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const ProfilBanner = () => {
  const prop = {
    profilImage: "/assets/terrassebois1.jpeg",
    altprop: "belle terrasse en bois de mes couilles",
    profilName: "Tic-Tac Bois",
  };
  return (
    <Box mx="auto" maxW="5xl">
      <Image
        w="100%"
        height={{ base: "100px", sm: "175px", md: "250px" }}
        objectFit="cover"
        objectPosition="100% 0"
        src={prop.profilImage}
        alt={prop.altprop}
      />
      <Flex
        justify="space-between"
        h={{ base: "40px", sm: "50px", md: "60px" }}
      >
        <Image
          position="relative"
          bottom={{ base: "45px", sm: "60px", md: "67.5" }}
          borderRadius="full"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          ml="16px"
          width={{ base: "90px", sm: "120px", md: "135px" }}
          height={{ base: "90px", sm: "120px", md: "135px" }}
          objectFit="cover"
          objectPosition="100% 0"
        />
        <Box display="flex" pt="12px">
          <Button
            w={{ base: "28px", sm: "40px", md: "50px" }}
            h={{ base: "28px", sm: "40px", md: "50px" }}
            size={{ base: "sm", sm: "md", md: "xl" }}
            variant="outline"
            colorScheme="teal"
            mr="10px"
            borderRadius="50px"
          >
            <FontAwesomeIcon icon={faEnvelope} color="teal"></FontAwesomeIcon>
          </Button>
          <Button
            w={{ base: "28px", sm: "40px", md: "50px" }}
            h={{ base: "28px", sm: "40px", md: "50px" }}
            size={{ base: "sm", sm: "sm", md: "xl" }}
            variant="outline"
            colorScheme="teal"
            mr="10px"
            borderRadius="50px"
          >
            <FontAwesomeIcon icon={faShareNodes} color="teal"></FontAwesomeIcon>
          </Button>
        </Box>
      </Flex>
      <Box>
        <Heading as="h4" size="md" ml="16px" mt="20px">
          Tic-Tac
        </Heading>
        <Text
          fontSize={{ base: "12px", md: "16px", lg: "18px" }}
          ml="16px"
          mt="10px"
          mr="16px"
        >
          Tic-Tac, c’est mon rêve d’enfant. Fan de bricolage avant même de
          savoir marcher, formé à l’école Boulle, je travaille le bois depuis 7
          ans déjà.
          <Button
            fontWeight="bold"
            variant="ghost"
            h="10px"
            fontSize="12px"
            m="0px"
            p="0px"
            marginLeft="2px"
            marginBottom="2px"
          >
            Lire plus
          </Button>
        </Text>
      </Box>
      <Flex align="center" justify="center" mt={5}>
        <Tabs
          variant="line"
          colorScheme="teal"
          w={{ base: "sm", sm: "md", md: "3xl", lg: "4xl" }}
        >
          <TabList color="teal">
            <Tab
              w={{ base: "sm", sm: "md", md: "xl" }}
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            >
              Projet
            </Tab>
            <Tab
              w={{ base: "sm", sm: "md", md: "xl" }}
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            >
              Planning
            </Tab>
            <Tab
              w={{ base: "sm", sm: "md", md: "xl" }}
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            >
              Contact
            </Tab>
            <Tab
              w={{ base: "sm", sm: "md", md: "xl" }}
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            >
              Réseau
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>four!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default ProfilBanner;
