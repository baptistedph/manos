import { Input, Box, Flex } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import Filter from "../components/shared/Filter"

const SearchLayout = ({ children }) => {
  const [search, setSearch] = useState("")
  return (
    <Box px={4}>
      <Input
        placeholder="Que recherchez-vous ?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Flex gap={3} mt={3}>
        <Filter>Localisation</Filter>
        <Filter>Budget</Filter>
        <Filter>Corps de métier</Filter>
      </Flex>
      {React.cloneElement(children, { search })}
    </Box>
  )
}

export default SearchLayout
