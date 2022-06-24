import { Flex, Box } from '@chakra-ui/react'
import Image from 'next/image'

const Header = () => {
  return (
    <Flex justifyContent="space-between" py={5} px={4}>
      <Image src="/logo.svg" width={40} height={40} alt="Logo de Manos" />
      <Box
        borderRadius="50%"
        overflow="hidden"
        width={42}
        height={42}
        position="relative">
        <Image
          src="https://thispersondoesnotexist.com/image"
          layout="fill"
          alt="Photo de profil"
        />
      </Box>
    </Flex>
  )
}

export default Header
