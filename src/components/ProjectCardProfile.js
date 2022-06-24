import React, { useRef, useState } from "react";

// Import chakra box
import { Box, Badge, StarIcon, Text, Flex, Spacer } from '@chakra-ui/react'
import ProjectCardSwiper from "./ProjectCardSwiper";

const ProjectCardProfile = () => {
	const project = {
		title: 'Bibliothèque',
		description: 'Fabrication et pose d’une bibliothèque en ébène du gabon et valchromat noir et gris. Pose de miroirs 6mm classe 4. Travail réalisé avec CréaArchitecture.',
		location: 'Paris IX',
	}

	return (
		<Box
			w={343}
			h={370}
			borderWidth='1px'
			borderRadius='lg'
			overflow='hidden'
		>
			<Flex direction='column'>
				<Box>
					<ProjectCardSwiper />
				</Box>
				<Box p='6' className='projectInfo'>
					<Flex alignItems='baseline'>
						<Box
							mt='1'
							fontWeight='semibold'
							as='h4'
							lineHeight='tight'
							noOfLines={1}
						>
							{project.title}
						</Box>
						<Spacer />
						<Box>
							{project.location}
						</Box>
					</Flex>
					<Box color='#94A3B8'>
						{project.description}
					</Box>
				</Box>
			</Flex>
		</Box>
	)
};

export default ProjectCardProfile;