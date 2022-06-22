import UsersTable from '../components/UsersTable'
import { Flex, Heading, Container } from '@chakra-ui/react'
import { fetchApi } from '../lib/api'
import "swiper/css/bundle";
import ProjectCard from '../components/ProjectCard';

// export const getServerSideProps = async ({ req }) => {

// 	const users = await fetchApi('/users')

// 	return {
// 		props: {
// 			users,
// 		},
// 	}
// }

const Home = ({ users }) => {

	return (
		<div>
			<h1>hello !!!</h1>
			<ProjectCard />
		</div>
		// <Flex
		// 	alignItems="center"
		// 	flexDirection="column"
		// 	justifyContent="center"
		// 	h="100vh">
		// 	<Container maxWidth={500}>
		// 		<Heading>Users</Heading>
		// 		<UsersTable users={users} />
		// 	</Container>
		// </Flex>
	)
}

export default Home
