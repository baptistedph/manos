import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";

const ProjectCardSearchPicsSwiper = () => {
	// still got to get those info from de database
	const PicsList = [
		{ "source": "./assets/project_card_pics/img1.jpg", "text": "bibliothèque ébène" },
		{ "source": "./assets/project_card_pics/img2.jpg", "text": "miroirs 1/2" },
		{ "source": "./assets/project_card_pics/img3.jpg", "text": "miroirs 2/2" }
	]
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
					{PicsList.map(image => <SwiperSlide className="project_swiper_slide"><img src={image.source} alt={image.text} className="projectCardSearchSwiperImg" /></SwiperSlide>)}

				</Swiper>
			</>
		</div>
	);
};

export default ProjectCardSearchPicsSwiper;