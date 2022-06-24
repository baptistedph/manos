import UsersTable from '../components/UsersTable'
import { Flex, Heading, Container } from '@chakra-ui/react'
import { fetchApi } from '../lib/api'
import "swiper/css/bundle";
import TabBarProfileSettings from '../components/TabBarProfileSettings';
import ProjectCardSearch from '../components/ProjectCardSearch';
import ProjectCardProfile from '../components/ProjectCardProfile';


const Home = () => {

	return (
		<div>
			<ProjectCardProfile />
			<br />
			<br />
			<ProjectCardSearch />
			<br />
			<br />
			<TabBarProfileSettings />
		</div>
	)
}

export default Home
