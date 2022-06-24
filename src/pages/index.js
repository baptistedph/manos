import UsersTable from "../components/UsersTable";
import { Flex, Heading, Container } from "@chakra-ui/react";
import { fetchApi } from "../lib/api";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Planning_card from "../components/Planning_card";
import Category from "../components/Category";
import Settings_card from "../components/Settings_card";
import Network from "../components/Network";
import Category_swiper_jobs from "../components/Category_swiper_jobs";
import Category_swiper_type from "../components/Category_swiper_type";
import { Box } from "@chakra-ui/react";
// export const getServerSideProps = async ({ req }) => {
//   const users = await fetchApi("/users");

//   return {
//     props: {
//       users,
//     },
//   };
// };

const Home = ({ users }) => {
  return (
    <Box>
      <Category_swiper_jobs />
      <Category_swiper_type />
      <Planning_card />
    </Box>
    // <Flex
    //   alignItems="center"
    //   flexDirection="column"
    //   justifyContent="center"
    //   h="100vh"
    // >
    //   <Container maxWidth={500}>
    //     <Heading>Users</Heading>
    //     <UsersTable users={users} />
    //   </Container>
    // </Flex>
  );
};

export default Home;
