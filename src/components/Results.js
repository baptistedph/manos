import { Flex, Heading, Box } from '@chakra-ui/react'
import ProfileCard from './shared/ProfileCard'

const Results = ({ search, data }) => {
  return (
    <Flex flexDirection="column" gap={5} mt={5}>
      <Heading size="sm">
        {data.length} {data.length > 1 ? 'résultats' : 'résultat'} pour {search}
      </Heading>
      <Flex
<<<<<<< HEAD
        justify={{ base: "center", sm: "space-between" }}
        align="baseline"
        wrap="wrap"
        gap={5}
        className="profils"
      >
        {data.map((user) => (
          <Box w={{ base: "350px", lg: "420px" }}>
=======
        justify="space-between"
        align="baseline"
        wrap="wrap"
        gap={5}
        className="profils">
        {data.map((user, i) => (
          <Box key={i} w={{ base: '350px', lg: '420px' }}>
>>>>>>> 09c6617bd79112e16c1c78cdec4f4605256896a7
            <ProfileCard user={user} />
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}

export default Results
