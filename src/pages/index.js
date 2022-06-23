import UsersTable from "../components/UsersTable"
import { Flex, Heading, Container } from "@chakra-ui/react"
import { fetchApi } from "../lib/api"
import Contact from "../components/contact"

/* export const getServerSideProps = async ({ req }) => {
  console.log(req)

  const users = await fetchApi('/users')

  return {
    props: {
      users,
    },
  }
} */

const Home = ({ users }) => {
  return <Contact />
}

export default Home
