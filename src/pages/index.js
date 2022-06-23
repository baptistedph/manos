import UsersTable from '../components/UsersTable'
import { Flex, Heading, Container } from '@chakra-ui/react'
import { fetchApi } from '../lib/api'

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
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      h="100vh">
      <Container maxWidth={500}>
        <Heading>Users</Heading>
        <UsersTable users={users} />
      </Container>
    </Flex>
  )
}

export default Home
