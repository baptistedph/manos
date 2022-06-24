// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Category from "./Category";

const Category_swiper_jobs = () => {
  return (
    <Box mt="1.875em" maxWidth="23.4375em">
      <Text ml="1em" fontWeight="bold" fontSize="0.875em">
        Métiers
      </Text>
      <>
        <Swiper
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="category_swiper"
        >
          <SwiperSlide className="category_slider">
            <Category
              name="Architecte"
              picture="sunguk-kim-Q5D4oYiZKAE-unsplash.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="category_slider">
            <Category name="Paysagiste" picture="garden-g63a673e94_1920.jpg" />
          </SwiperSlide>
          <SwiperSlide className="category_slider">
            <Category name="Menuisier" picture="waters-g72ab618d9_1920.jpg" />
          </SwiperSlide>
          <SwiperSlide className="category_slider">
            <Category
              name="Électricien"
              picture="electric-g0c1835dff_1920.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="category_slider">
            <Category name="Plombier" picture="plumbing-g8f5a6a83a_1920.jpg" />
          </SwiperSlide>
        </Swiper>
      </>
    </Box>
  );
};

export default Category_swiper_jobs;
