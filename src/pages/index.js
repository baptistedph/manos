import UsersTable from '../components/UsersTable'
import { Flex, Heading, Container } from '@chakra-ui/react'
import { fetchApi } from '../lib/api'
import "swiper/css/bundle";
import TabBarProfileSettings from '../components/TabBarProfileSettings';
import ProjectCard from '../components/ProjectCard';


const Home = ({ users }) => {

	return (
		<div>
			<ProjectCard />
			<br />
			<br />
			<TabBarProfileSettings />
		</div>
	)
}

export default Home
