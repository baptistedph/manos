import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const Project_card = () => {
	return (
		<div id="project-card">
			<span>carte</span>
			<>
				<Swiper
					pagination={{
						type: "fraction",
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide><img src="./assets/test_slider/IMG_0791.jpg" alt="roi lion" className="swiper-slide img" /></SwiperSlide>
					<SwiperSlide><img src="./assets/test_slider/IMG_0792.jpg" alt="roi lion" className="swiper-slide img" /></SwiperSlide>
					<SwiperSlide><img src="./assets/test_slider/IMG_0794.jpg" alt="roi lion" className="swiper-slide img" /></SwiperSlide>
					<SwiperSlide><img src="./assets/test_slider/IMG_0796.jpg" alt="roi lion" className="swiper-slide img" /></SwiperSlide>
					<SwiperSlide><img src="./assets/test_slider/IMG_0798.jpg" alt="roi lion" className="swiper-slide img" /></SwiperSlide>
					<SwiperSlide><img src="./assets/test_slider/IMG_0799.jpg" alt="roi lion" className="swiper-slide img" /></SwiperSlide>
					<SwiperSlide><img src="./assets/test_slider/IMG_0800.jpg" alt="roi lion" className="swiper-slide img" /></SwiperSlide>
					<SwiperSlide><img src="./assets/test_slider/IMG_0801.jpg" alt="roi lion" className="swiper-slide img" /></SwiperSlide>
					<SwiperSlide><img src="./assets/test_slider/IMG_0802.jpg" alt="roi lion" className="swiper-slide img" /></SwiperSlide>
				</Swiper>
			</>
		</div>
	);
};

export default Project_card;