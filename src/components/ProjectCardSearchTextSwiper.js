import React, { useRef, useState } from "react";
import { Box, Badge, StarIcon, Text, Flex, Spacer } from '@chakra-ui/react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";

const ProjectCardSearchTextSwiper = () => {
	const project = {
		title: 'Bibliothèque',
		description: 'Fabrication et pose d’une bibliothèque en ébène du gabon et valchromat noir et gris. Pose de miroirs 6mm classe 4.',
		location: 'Paris IX',
		year: '2021',
		cost: '20 001 - 50 000 €'
	}

	return (
		<div>
			<>
				<Swiper
					pagination={{
						type: "fraction",
					}}
					modules={[Pagination]}
					className="textSwiper"
				>
					{/* after testing with pictures of different sizes, it appears the width is fix. */}
					<SwiperSlide className="project_swiper_slide">
						<Box className='projectInfo'>
							<Flex direction='column'>
								<Box id='projectTitle'
									noOfLines={1}
								>
									{project.title}
								</Box>
								<Spacer />
								<Box
									id='projectDescription'
								>
									{project.description}
								</Box>
							</Flex>
						</Box>
					</SwiperSlide>
					<SwiperSlide className="project_swiper_slide">
						<Box className='projectInfo'>
							<Flex alignItems='baseline' justifyContent='space-between'>
								<Flex direction='column'>
									<Box
										className='projectSubTitle'
										noOfLines={1}
									>
										Localisation
									</Box>
									<Spacer />
									<Box
										className='projectTextInfo'
									>
										{project.location}
									</Box>
								</Flex>
								<Flex direction='column'>
									<Box
										className='projectSubTitle'
										noOfLines={1}
									>
										Coût du projet
									</Box>
									<Spacer />
									<Box
										className='projectTextInfo'
									>
										{project.cost}
									</Box>
								</Flex>
							</Flex>
							<Flex direction='column'>
								<Box
									className='projectSubTitle'
									noOfLines={1}
								>
									Année de réalisation
								</Box>
								<Spacer />
								<Box
									className='projectTextInfo'
								>
									{project.year}
								</Box>
							</Flex>
						</Box>
					</SwiperSlide>
				</Swiper>
			</>
		</div >
	);
};

export default ProjectCardSearchTextSwiper;