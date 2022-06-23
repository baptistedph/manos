import UsersTable from "../components/UsersTable";
import { Flex, Heading, Container } from "@chakra-ui/react";
import { fetchApi } from "../lib/api";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Planning_card from "../components/Planning_card";

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
    <Planning_card />
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
