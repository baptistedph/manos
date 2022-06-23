import UsersTable from '../components/UsersTable'
import { Flex, Heading, Container } from '@chakra-ui/react'
import { fetchApi } from '../lib/api'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

// export const getServerSideProps = async ({ req }) => {
//   console.log(req)

//   const users = await fetchApi('/users')

//   return {
//     props: {
//       users,
//     },
//   }
// }

const Home = ({ users }) => {

  return (
    <Tabs colorScheme='green'>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
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
  </TabPanels>
</Tabs>
  )
}

export default Home