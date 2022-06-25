import UsersTable from '../components/UsersTable'
import { Flex } from '@chakra-ui/react'
import { fetchApi } from '../lib/api'
import DefaultLayout from '../layouts/DefaultLayout'
import SearchLayout from '../layouts/SearchLayout'
import CategoriesSwiper from '../components/shared/CategoriesSwiper'
import ProfileCard from '../components/shared/ProfileCard'

export const getServerSideProps = async ({ req }) => {
  const users = await fetchApi('/users')

  return {
    props: {
      users,
    },
  }
}

const Home = ({ users }) => {
  return (
    <Flex mt={5} flexDirection="column" gap={5}>
      <CategoriesSwiper
        title="Métiers"
        categories={['Menuisier', 'Charpentier', 'Peintre', 'Plaquiste']}
      />
      <CategoriesSwiper
        title="Projets"
        categories={['Cuisines', 'Salles de bain', 'Escaliers', 'Verranda']}
      />
      <ProfileCard />
    </Flex>
  )
}

Home.getLayout = page => {
  return (
    <DefaultLayout>
      <SearchLayout>{page}</SearchLayout>
    </DefaultLayout>
  )
}

export default Home
