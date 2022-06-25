import { Flex, Heading } from "@chakra-ui/react"

const Results = ({ search, data }) => {
  return (
    <Flex flexDirection="column" gap={3} mt={5}>
      <Heading size="sm">
        {data.length} {data.length > 1 ? "résultats" : "résultat"} pour {search}
      </Heading>
      {data.map((user) => (
        <h1>{user.company}</h1>
      ))}
    </Flex>
  )
}

export default Results
