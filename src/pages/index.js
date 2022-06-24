import UsersTable from '../components/UsersTable'
import { Flex, Heading, Container } from '@chakra-ui/react'
import { fetchApi } from '../lib/api'
import Result from '../components/result'
import Project_page from './project-page'
import "swiper/css/bundle";
import TabBarProfileSettings from '../components/TabBarProfileSettings';
import ProjectCardSearch from '../components/ProjectCardSearch';
import ProjectCardProfile from '../components/ProjectCardProfile';
import ProjectCard from '../components/ProjectCard'

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
		<div>
      <Project_page />
		</div>
	)
}

export default Home
