import React from "react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { Heading, Flex, Box } from "@chakra-ui/react"
import { useRouter } from "next/router"

const BackArrow = () => {
  const router = useRouter()
  return (
    <button onClick={() => router.back()}>
      <Flex alignItems="center" ml={4} mb={5}>
        <ArrowBackIcon color="teal" boxSize={4} mr={0.5} />
        <Heading size="sm" fontSize={{ base: "14px", lg: "18px" }} color="teal">
          Retour
        </Heading>
      </Flex>
    </button>
  )
}

export default BackArrow
