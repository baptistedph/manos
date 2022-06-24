import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";

const ProjectCardSearchPicsSwiper = () => {
	return (
		<div>
			<>
				<Swiper
					pagination={{
						type: "fraction",
					}}
					modules={[Pagination]}
					className="ProjectCardSearchPicsSwiper"
				>
					{/* after testing with pictures of different sizes, it appears the width is fix. */}
					<SwiperSlide className="project_swiper_slide"><img src="./assets/project_card_pics/img1.jpg" alt="bibliothèque ébène" className="projectSwiperImg" /></SwiperSlide>
					<SwiperSlide className="project_swiper_slide"><img src="./assets/project_card_pics/img2.jpg" alt="miroirs 1/2" className="projectSwiperImg" /></SwiperSlide>
					<SwiperSlide className="project_swiper_slide"><img src="./assets/project_card_pics/img3.jpg" alt="miroirs 2/2" className="projectSwiperImg" /></SwiperSlide>
				</Swiper>
			</>
		</div>
	);
};

export default ProjectCardSearchPicsSwiper;