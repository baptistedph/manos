import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Text, Box, Flex } from "@chakra-ui/react";
// Import Swiper styles

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Planning_card from "./Planning_card";
const Planning = () => {
  return (
    <Box>
      <Text
        fontSize={["0.875em", "0.875em", "2em"]}
        ml={["1em", "1em", "0.6em", "4.5em", "11em"]}
        mb="0.75em"
        mt="1.25em"
        fontWeight="bold"
      >
        Planning 2022
      </Text>

      <>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="planning_arrows"
        >
          <SwiperSlide>
            <Planning_card month="January" />
          </SwiperSlide>
          <SwiperSlide>
            <Planning_card month="February" />
          </SwiperSlide>
          <SwiperSlide>
            <Planning_card month="Mars" />
          </SwiperSlide>
          <SwiperSlide>
            <Planning_card month="April" />
          </SwiperSlide>
          <SwiperSlide>
            <Planning_card month="May" />
          </SwiperSlide>
          <SwiperSlide>
            <Planning_card month="June" />
          </SwiperSlide>
        </Swiper>
      </>
    </Box>
  );
};

export default Planning;
