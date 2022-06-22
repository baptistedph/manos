import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const ProjectCardSwiper = () => {
	return (
		<div>
			<>
				<Swiper
					pagination={{
						type: "fraction",
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					{/* after testing with pictures of different sizes, it appears the width is fix. */}
					<SwiperSlide className="project_swiper_slide"><img src="./assets/test_slider/img1.jpg" alt="image fairytail 1" className="project_swiper_img" /></SwiperSlide>
					<SwiperSlide className="project_swiper_slide"><img src="./assets/test_slider/img2.jpg" alt="image fairytail 2" className="project_swiper_img" /></SwiperSlide>
					<SwiperSlide className="project_swiper_slide"><img src="./assets/test_slider/img3.jpg" alt="peinture roi lion 1" className="project_swiper_img" /></SwiperSlide>
					<SwiperSlide className="project_swiper_slide"><img src="./assets/test_slider/img4.jpg" alt="peinture roi lion 2" className="project_swiper_img" /></SwiperSlide>
					<SwiperSlide className="project_swiper_slide"><img src="./assets/test_slider/img5.jpg" alt="peinture roi lion 3" className="project_swiper_img" /></SwiperSlide>
					<SwiperSlide className="project_swiper_slide"><img src="./assets/test_slider/img6.jpg" alt="peinture roi lion 4" className="project_swiper_img" /></SwiperSlide>
				</Swiper>
			</>
		</div>
	);
};

export default ProjectCardSwiper;