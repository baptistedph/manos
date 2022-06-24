import { Swiper, SwiperSlide } from 'swiper/react'
import Category from './Category'
import { Box, Flex, Heading } from '@chakra-ui/react'

import 'swiper/css'

const CategoriesSwiper = ({ title, categories = [] }) => {
  return (
    <Flex flexDirection="column" gap={3}>
      <Heading size="sm">{title}</Heading>
      <Box maxW="100%">
        <Swiper
          spaceBetween={12}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}>
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
