import { Swiper, SwiperSlide } from "swiper/react"
import Category from "./Category"
import { Box, Flex, Heading } from "@chakra-ui/react"
import useMediaQuery from "@mui/material/useMediaQuery"

import "swiper/css"

const CategoriesSwiper = ({ title, categories = [] }) => {
  const matches = useMediaQuery("(min-width:480px)")
  return (
    <Flex flexDirection="column" gap={3}>
      <Heading size="sm">{title}</Heading>
      <Box maxW="100%">
        <Swiper
          spaceBetween={12}
          slidesPerView={matches ? 3 : 2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {categories.map((category, i) => {
            return (
              <SwiperSlide key={i}>
                <Category
                  name={category}
                  image="https://thispersondoesnotexist.com/image"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Box>
    </Flex>
  )
}

export default CategoriesSwiper
