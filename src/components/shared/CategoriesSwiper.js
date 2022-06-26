import { Swiper, SwiperSlide } from "swiper/react"
import Category from "./Category"
import { Box, Flex, Heading } from "@chakra-ui/react"

const CategoriesSwiper = ({ title, categories = [] }) => {
  return (
    <Flex flexDirection="column" gap={3}>
      <Heading size="sm">{title}</Heading>
      <Box maxW="100%">
        <Swiper spaceBetween={12} slidesPerView={2}>
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
