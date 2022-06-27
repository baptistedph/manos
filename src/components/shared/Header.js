import { Flex, Box } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import BackArrow from "./BackArrow"
const Header = () => {
  return (
    <>
      <Flex justifyContent="space-between" py={5} px={4}>
        <Link href="/">
          <Image src="/logo.svg" width={40} height={40} alt="Logo de Manos" />
        </Link>
        <Box
          borderRadius="50%"
          overflow="hidden"
          width={42}
          height={42}
          position="relative"
        >
          <Image
            src="https://api-manos.bdph.me/uploads/aa03039b-78f7-4248-aad5-1bedc127ad08.jpg"
            layout="fill"
            objectFit="cover"
            alt="Photo de profil"
          />
        </Box>
      </Flex>
    </>
  )
}

export default Header
