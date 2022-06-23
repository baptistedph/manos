import UsersTable from '../components/UsersTable'
import { Flex, Heading, Container } from '@chakra-ui/react'
import { fetchApi } from '../lib/api'

export const getServerSideProps = async ({ req }) => {
  console.log(req)

  const users = await fetchApi('/users')

  return {
    props: {
      users,
    },
  }
}

const Home = ({ users }) => {
  console.log(users)

  return (
    <Flex justifyContent="center" alignItems="center" h="100vh">
      <Container maxW="4xl">
        <Heading>Users</Heading>
        <UsersTable users={users} />
      </Container>
    </Flex>
  )
}

export default Home
