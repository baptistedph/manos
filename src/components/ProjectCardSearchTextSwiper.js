import React, { useRef, useState } from "react";
import { Box, Badge, StarIcon, Text, Flex, Spacer } from '@chakra-ui/react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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
				<Swiper>
					{/* after testing with pictures of different sizes, it appears the width is fix. */}
					<SwiperSlide className="project_swiper_slide">
						<Box className='projectCardSearchInfo'>
							<Flex direction='column'>
								<Box id='projectCardSearchTitle'
									noOfLines={1}
								>
									{project.title}
								</Box>
								<Spacer />
								<Box
									id='projectCardSearchDescription'
								>
									{project.description}
								</Box>
							</Flex>
						</Box>
					</SwiperSlide>
					<SwiperSlide className="project_swiper_slide">
						<Box className='projectCardSearchInfo'>
							<Flex alignItems='baseline' justifyContent='space-between'>
								<Flex direction='column'>
									<Box
										className='projectCardSearchSecondaryTitle'
										noOfLines={1}
									>
										Localisation
									</Box>
									<Spacer />
									<Box
										className='projectCardSearchTextInfo'
									>
										{project.location}
									</Box>
								</Flex>
								<Flex direction='column'>
									<Box
										className='projectCardSearchSecondaryTitle'
										noOfLines={1}
									>
										Coût du projet
									</Box>
									<Spacer />
									<Box
										className='projectCardSearchTextInfo'
									>
										{project.cost}
									</Box>
								</Flex>
							</Flex>
							<Flex direction='column'>
								<Box
									className='projectCardSearchSecondaryTitle'
									noOfLines={1}
								>
									Année de réalisation
								</Box>
								<Spacer />
								<Box
									className='projectCardSearchTextInfo'
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