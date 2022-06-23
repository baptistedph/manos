import { Box, Image, Heading, Text, Button,Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

    const ProfilBanner = () => {
        const prop = {
            profilImage: '/assets/terrassebois1.jpeg',
            altprop: 'belle terrasse en bois de mes couilles',
            profilName:'Tic-Tac Bois'
        }
        return ( 
        <Box w="23.438rem" borderRadius="6px" maxW="375"  color='black' h="min-content">   
            <Image w="375px" h="100px" objectFit="cover" objectPosition="100% 0" src={prop.profilImage} alt={prop.altprop}/>
            <Image
                borderRadius='full'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
                position="absolute"
                bottom="210px"
                ml="16px"
                w="90px"
                h="90px"
                objectFit="cover"
                objectPosition="100% 0"
            />
            <Box position="relative" 
            left="290px" 
            top="15px" 
            w="30px" 
            display="flex">
                <Button variant="outline" colorScheme="green" mr="10px" borderRadius="50px" size="sm">
                    <FontAwesomeIcon icon={faEnvelope} color="green"> </FontAwesomeIcon>
                </Button>
                <Button  variant="outline" colorScheme="green" mr="10px" borderRadius="50px" size="sm">
                    <FontAwesomeIcon icon={faShareNodes} color="green"></FontAwesomeIcon>
                </Button>
            </Box>
            <Box pt="30px">
                <Heading as='h4' size='md' ml="16px">
                    Tic-Tac
                </Heading>
                <Text fontSize="12px" ml="16px" mt="10px" mr="16px">
                Tic-Tac, c’est mon rêve d’enfant. 
                Fan de bricolage avant même de savoir marcher, 
                formé à l’école Boulle, je travaille le bois depuis 7 ans déjà. 
                <Button fontWeight="bold" variant="ghost" h="10px" fontSize="12px"m="0px" p="0px" marginLeft="2px" marginBottom="2px">
                Lire plus
                </Button>
                    </Text>
            </Box>
            <Tabs>
            <TabList>
                <Tab>Projet</Tab>
                <Tab>Planning</Tab>
                <Tab>Contact</Tab>
                <Tab>Réseau</Tab>
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
        </Box>
        
         );
    }

export default ProfilBanner;