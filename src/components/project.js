import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Box, Flex } from "@chakra-ui/react";

const Project = () => {
	const img = 'https://cache.marieclaire.fr/data/photo/w1200_h630_c17/5o/idees-deco-terrasse.jpg'
	const name = 'Slide'

	return (
		<Flex
			justifyContent='center'
		>
			<Box
				ml="1em"
				mt="1.5em"
				mb='1.5em'
				minW="23.438em"
				maxWidth="650px"
				p={0}
			>
				<h2 style={{ fontSize: 1 + "em", marginTop: 1.25 + "em", marginBottom: 0.5 + 'em', fontWeight: 'bold' }} >Autre projet</h2>
				<Swiper
					slidesPerView={3}
					spaceBetween={10}
					modules={[Pagination]}
					className="projectSwiper"
				>
					<SwiperSlide className="projectSlide" style={{ marginLeft: 1 + "em" }}>
						<img src={img} alt='img' />
						{name}
					</SwiperSlide>

					<SwiperSlide className="projectSlide">
						<img src={img} alt='img' />
						{name}
					</SwiperSlide>

					<SwiperSlide className="projectSlide">
						<img src={img} alt='img' />
						{name}
					</SwiperSlide>
					<SwiperSlide className="projectSlide">
						<img src={img} alt='img' />
						{name}
					</SwiperSlide>

					<SwiperSlide className="projectSlide">
						<img src={img} alt='img' />
						{name}
					</SwiperSlide>

					<SwiperSlide className="projectSlide">
						<img src={img} alt='img' />
						{name}
					</SwiperSlide>
				</Swiper>
			</Box>
		</Flex>
	);
}

export default Project;