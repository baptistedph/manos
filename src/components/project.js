import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Project = () => {
    return ( 
      <>
      <h2>Autre projet</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
            clickable: true,
        }}
        height='6.2em'
        modules={[Pagination]}
        className="projectSwiper"
      >
        <SwiperSlide className="projectSlide" style={{marginLeft: 1 + "em" }}>
            <img src='https://cache.marieclaire.fr/data/photo/w1200_h630_c17/5o/idees-deco-terrasse.jpg' alt='img'/>
            Slide 1
        </SwiperSlide>
        <SwiperSlide className="projectSlide">
        <img src='https://cache.marieclaire.fr/data/photo/w1200_h630_c17/5o/idees-deco-terrasse.jpg' alt='img'/>
        Slide 2
        </SwiperSlide>

        <SwiperSlide className="projectSlide">
        <img src='https://cache.marieclaire.fr/data/photo/w1200_h630_c17/5o/idees-deco-terrasse.jpg' alt='img'/>
        Slide 3
        </SwiperSlide>
        <SwiperSlide className="projectSlide">
        <img src='https://cache.marieclaire.fr/data/photo/w1200_h630_c17/5o/idees-deco-terrasse.jpg' alt='img'/>
        Slide 4
        </SwiperSlide>
        <SwiperSlide className="projectSlide">
        <img src='https://cache.marieclaire.fr/data/photo/w1200_h630_c17/5o/idees-deco-terrasse.jpg' alt='img'/>
        Slide 5
        </SwiperSlide>
        <SwiperSlide className="projectSlide">
        <img src='https://cache.marieclaire.fr/data/photo/w1200_h630_c17/5o/idees-deco-terrasse.jpg' alt='img'/>
        Slide 6
        </SwiperSlide>
      </Swiper>
      </>
     );
}
 
export default Project;