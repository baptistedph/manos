import { Box, Flex } from '@chakra-ui/react';
import "swiper/css";
import "swiper/css/pagination";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

const Colab = () => {
	const src = './assets/pictures/profile.jpg'

	return (
		<Flex
			justifyContent='center'
		>
			<Box
				ml="1em"
				mt="1.5em"
				minWidth="23.438em"
				maxWidth="650px"

			>
				<h2 style={{ fontSize: 1 + "em", marginTop: 1.25 + "em", marginBottom: 0.5 + 'em', fontWeight: 'bold' }} >Collaborateurs</h2>
				{/* "slidesPerView" needs to be inferior or equal to the number of collaborators. */}
				<Swiper
					slidesPerView={5}
					spaceBetween={7}
					modules={[Pagination]}
					className="Colabs"
				>
					<SwiperSlide>
						<Flex flexDirection="column" justifyContent="center" alignItems="center">
							<img src={src} className='Collab' />
							<span className="CollabHidden">nom</span>
							<span className="CollabHidden">profession</span>
						</Flex>
					</SwiperSlide>
					<SwiperSlide>
						<Flex flexDirection="column" justifyContent="center" alignItems="center">
							<img src={src} className='Collab' />
							<span className="CollabHidden">nom</span>
							<span className="CollabHidden">profession</span>
						</Flex>
					</SwiperSlide>
					<SwiperSlide>
						<Flex flexDirection="column" justifyContent="center" alignItems="center">
							<img src={src} className='Collab' />
							<span className="CollabHidden">nom</span>
							<span className="CollabHidden">profession</span>
						</Flex>
					</SwiperSlide>
					<SwiperSlide>
						<Flex flexDirection="column" justifyContent="center" alignItems="center">
							<img src={src} className='Collab' />
							<span className="CollabHidden">nom</span>
							<span className="CollabHidden">profession</span>
						</Flex>
					</SwiperSlide>
					<SwiperSlide>
						<Flex flexDirection="column" justifyContent="center" alignItems="center">
							<img src={src} className='Collab' />
							<span className="CollabHidden">nom</span>
							<span className="CollabHidden">profession</span>
						</Flex>
					</SwiperSlide>
					<SwiperSlide>
						<Flex flexDirection="column" justifyContent="center" alignItems="center">
							<img src={src} className='Collab' />
							<span className="CollabHidden">nom</span>
							<span className="CollabHidden">profession</span>
						</Flex>
					</SwiperSlide>
					<SwiperSlide>
						<Flex flexDirection="column" justifyContent="center" alignItems="center">
							<img src={src} className='Collab' />
							<span className="CollabHidden">nom</span>
							<span className="CollabHidden">profession</span>
						</Flex>
					</SwiperSlide>
				</Swiper>
			</Box>
		</Flex>
	)
}

export default Colab;