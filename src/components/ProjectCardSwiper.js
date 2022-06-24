import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";

const ProjectCardSwiper = () => {
	const img='./assets/project_card_pics/img1.jpg'

	return (
		<div>
			<>
				<Swiper
					pagination={{
						type: "fraction",
					}}
					modules={[Pagination]}
					className="ProjectCardSwiper"
				>
					{/* after testing with pictures of different sizes, it appears the width is fix. */}
					<SwiperSlide className="project_swiper_slide"><img src={img} alt="img" className="project_swiper_img" /></SwiperSlide>
					<SwiperSlide className="project_swiper_slide"><img src={img} alt="img" className="project_swiper_img" /></SwiperSlide>
					<SwiperSlide className="project_swiper_slide"><img src={img} alt="img" className="project_swiper_img" /></SwiperSlide>
					<SwiperSlide className="project_swiper_slide"><img src={img} alt="img" className="project_swiper_img" /></SwiperSlide>
					<SwiperSlide className="project_swiper_slide"><img src={img} alt="img" className="project_swiper_img" /></SwiperSlide>
					<SwiperSlide className="project_swiper_slide"><img src={img} alt="img" className="project_swiper_img" /></SwiperSlide>
				</Swiper>
			</>
		</div>
	);
};

export default ProjectCardSwiper;