import UsersTable from '../components/UsersTable'
import { Flex, Heading, Container } from '@chakra-ui/react'
import { fetchApi } from '../lib/api'
import "swiper/css/bundle";
import ProjectCardSearch from '../components/ProjectCardSearch';


const Home = () => {

	return (
		<div id='center_everything'>
			<ProjectCardSearch />
		</div>
	)
}

export default Home
