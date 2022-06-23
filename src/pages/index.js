import UsersTable from '../components/UsersTable'
import { Flex, Heading, Container } from '@chakra-ui/react'
import { fetchApi } from '../lib/api'
import Result from '../components/result'

// export const getServerSideProps = async ({ req }) => {
//   

//   const users = await fetchApi('/users')

//   return {
//     props: {
//       users,
//     },
//   }
// }

const Home = ({ users }) => {
  
  return (
    <Result />
    
  )
}

export default Home
