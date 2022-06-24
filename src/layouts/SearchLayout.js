import { Input, Box, Flex } from '@chakra-ui/react'
import Filter from '../components/shared/Filter'

const SearchLayout = ({ children }) => {
  return (
    <Box px={4}>
      <Input placeholder="Que recherchez-vous ?" />
      <Flex gap={3} mt={3}>
        <Filter>Localisation</Filter>
        <Filter>Budget</Filter>
        <Filter>Corps de métier</Filter>
      </Flex>
      {children}
    </Box>
  )
}

export default SearchLayout
