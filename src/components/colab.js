import { Box } from '@chakra-ui/react';
import "swiper/css";
import "swiper/css/pagination";
import React from 'react';
import {Swiper ,SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

const Colab = () => {
    const src='./assets/pictures/profile.jpg'

    return (
        <Box
            ml="1em"
            mt="1.5em"
            maxWidth="23.438em"
            
        >
        <h2 style={{fontSize:1 + "em", marginTop:1.25 + "em", marginBottom:0.5 + 'em' ,fontWeight:'bold'}} >Collaborateur</h2>
        <Swiper
                slidesPerView={10}
                spaceBetween={10}
                modules={[Pagination]}
                className="Colabs"
        >
            <SwiperSlide>
                <img src={src} className='Collab'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={src} className='Collab'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={src} className='Collab'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={src} className='Collab'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={src} className='Collab'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={src} className='Collab'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={src} className='Collab'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={src} className='Collab'/>
            </SwiperSlide>

            <SwiperSlide>
                <img src={src} className='Collab'/>
            </SwiperSlide>
            </Swiper>
        </Box>
    )           
}
 
export default Colab;