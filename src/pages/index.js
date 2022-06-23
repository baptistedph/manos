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
			<div>
				<ProjectCard />
				{/* // <Flex
			// 	alignItems="center"
			// 	flexDirection="column"
			// 	justifyContent="center"
			// 	h="100vh">
			// 	<Container maxWidth={500}>
			// 		<Heading>Users</Heading>
			// 		<UsersTable users={users} />
			// 	</Container>
			// </Flex> */}
				{/* <Flex justifyContent="center" alignItems="center" h="100vh">
					<Container maxW="4xl">
						<Heading>Users</Heading>
						<UsersTable users={users} />
					</Container>
				</Flex> */}
			</div>
		</div>
	)
}

export default Home
