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
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faShareNodes } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { fetchPhpApi } from "../../lib/api"
import Contact from "../../components/shared/Contact"
import ProjectCard from "../../components/shared/ProjectCard"

const ProfilBanner = ({ user, projects }) => {
  return (
    <Box mx="auto" maxW="5xl">
      <Image
        w="100%"
        height={{ base: "100px", sm: "175px", md: "250px" }}
        objectFit="cover"
        objectPosition="100% 0"
        src={"https://api-manos.bdph.me/uploads/" + user.banner}
        alt="banner"
      />
      <Flex
        justify="space-between"
        h={{ base: "40px", sm: "50px", md: "60px" }}
      >
        <Image
          position="relative"
          bottom={{ base: "45px", sm: "60px", md: "67.5" }}
          borderRadius="full"
          src={"https://api-manos.bdph.me/uploads/" + user.profile_picture}
          alt="Dan Abramov"
          ml="16px"
          width={{ base: "90px", sm: "120px", md: "135px" }}
          height={{ base: "90px", sm: "120px", md: "135px" }}
          objectFit="cover"
        />
        <Box display="flex" pt="12px">
          <Button
            w={{ base: "28px", sm: "40px", md: "50px" }}
            h={{ base: "28px", sm: "40px", md: "50px" }}
            size={{ base: "sm", sm: "md", md: "xl" }}
            fontSize={{ base: "16px", md: "20px", lg: "25px" }}
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
            fontSize={{ base: "16px", md: "20px", lg: "25px" }}
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
          {user.company}
        </Heading>
        <Text
          fontSize={{ base: "12px", sm: "16px", md: "18px" }}
          ml="16px"
          mt="10px"
          mr="16px"
        >
          {user.bio}
          <Button
            fontWeight="bold"
            variant="ghost"
            h="10px"
            fontSize={{ base: "12px", sm: "14px", md: "16px" }}
            m="0px"
            p="0px"
            marginLeft="2px"
            marginBottom="2px"
          >
            Lire plus
          </Button>
        </Text>
      </Box>
      <Flex align="center" justify="center" mt={5} m="16px">
        <Tabs
          variant="line"
          colorScheme="teal"
          w={{ base: "xs", sm: "md", md: "3xl", lg: "4xl" }}
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
              <Flex justify="center" align="baseline" wrap="wrap" gap={5}>
                {projects.map((project) => (
                  <ProjectCard project={project} />
                ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <Contact
                phone={user.phone}
                street={user.street}
                email={user.email}
                post_code={user.post_code}
                city={user.city}
              />
            </TabPanel>
            <TabPanel>
              <p>four!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  )
}

export const getStaticPaths = async () => {
  const res = await fetchPhpApi("/users")

  const paths = res.map((user) => {
    return {
      params: { id: user.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id
  const res = await axios.get(
    process.env.NEXT_PUBLIC_PHP_API_URL + "/users.php?userId=" + id
  )
  const data = res.data

  const projectRes = await axios.get(
    process.env.NEXT_PUBLIC_PHP_API_URL + "/projects.php?userId=" + id
  )

  const projects = projectRes.data

  return {
    props: { user: data, projects },
  }
}

export default ProfilBanner
