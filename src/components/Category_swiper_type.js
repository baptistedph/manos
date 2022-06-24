// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Category from "./Category";

const Category_swiper_type = () => {
  return (
    <Box mt="1.875em">
      <Text ml="1em" fontWeight="bold" fontSize="0.875em">
        Types de projets
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
            <Category name="Cuisines" picture="kitchen-gbcccb808c_1920.jpg" />
          </SwiperSlide>
          <SwiperSlide className="category_slider">
            <Category
              name="Salle de bain"
              picture="bathroom-g49911e202_1920.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="category_slider">
            <Category name="Chambres" picture="bed-g89c9fe688_1920.jpg" />
          </SwiperSlide>
          <SwiperSlide className="category_slider">
            <Category name="Salon" picture="living-room-g49a6e1cba_1920.jpg" />
          </SwiperSlide>
          <SwiperSlide className="category_slider">
            <Category
              name="Maison complète"
              picture="large-home-g4446d6391_1280.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </>
    </Box>
  );
};

export default Category_swiper_type;
