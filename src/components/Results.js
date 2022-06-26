import { Flex, Heading } from "@chakra-ui/react"
import ProfileCard from "./shared/ProfileCard"
import Link from "next/link"

const Results = ({ search, data }) => {
  return (
    <Flex flexDirection="column" gap={3} mt={5}>
      <Heading size="sm">
        {data.length} {data.length > 1 ? "résultats" : "résultat"} pour {search}
      </Heading>
      <Flex justify="center" align="baseline" wrap="wrap" gap={5}>
        {data.map((user) => (
          <>
            <ProfileCard user={user} />
          </>
        ))}
      </Flex>
    </Flex>
  )
}

export default Results
