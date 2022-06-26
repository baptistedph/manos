import { Box, Flex, Heading, Button, Text } from "@chakra-ui/react"
import { EmailIcon } from "@chakra-ui/icons"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import "swiper/css"

const SlideImage = ({ src }) => {
  return (
    <Box position="relative" h={215}>
      <Image src={src} layout="fill" alt="Photo de projet" objectFit="cover" />
    </Box>
  )
}

const ProjectCard = ({ project }) => {
  const [activeSlide, setActiveSlide] = useState(1)
  const [slideImageNumber, setImageSlide] = useState(0)
  return (
    <Link href="/">
      <Box
        maxW="sm"
        borderRadius="md"
        overflow="hidden"
        border="solid"
        borderWidth={1}
        position="relative"
        borderColor="gray.200"
      >
        <Box
          position="absolute"
          zIndex={10}
          bgColor="whiteAlpha.600"
          fontSize={14}
          px={4}
          py={1}
          borderRadius="full"
          fontWeight={600}
          color="white"
          top={3}
          right={3}
        >
          {activeSlide}/{slideImageNumber}
        </Box>
        <Swiper
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
          onSwiper={(swiper) => setImageSlide(swiper.imagesLoaded)}
        >
          {project.pictures_name?.map((picture) => (
            <SwiperSlide>
              <SlideImage
                src={"https://api-manos.bdph.me/uploads/" + picture}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Box>
              <Flex flexDir="column" p={4} gap={4}>
                {/* desc */}
                <Box>
                  <Heading size="sm" mb={3}>
                    {project.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    {project.description}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box h="fit-content">
              <Flex flexDir="column" p={4} gap={4}>
                {/* desc */}
                <Flex justifyContent="space-between">
                  <Box>
                    <Heading size="xs" mb={1}>
                      Temps de réalisation
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      {project.timespan}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" mb={1}>
                      Coût du projet
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      {project.timespan}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Link>
  )
}

export default ProjectCard
