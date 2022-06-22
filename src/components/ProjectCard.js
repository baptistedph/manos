import React, { useRef, useState } from "react";

// Import chakra box
import { Box, Badge, StarIcon } from '@chakra-ui/react'
import ProjectCardSwiper from "./ProjectCardSwiper";

const ProjectCard = () => {
	const project = {
		title: 'Bibliothèque',
		description: 'Fabrication et pose d’une bibliothèque en ébène du gabon et valchromat noir et gris. Pose de miroirs 6mm classe 4. Travail réalisé avec CréaArchitecture.',
	}

	return (
		<Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
			<ProjectCardSwiper />

			<Box p='6'>
				<Box
					mt='1'
					fontWeight='semibold'
					as='h4'
					lineHeight='tight'
					noOfLines={1}
				>
					{project.title}
				</Box>

				<Box>
					{project.description}
				</Box>
			</Box>
		</Box>
	)
};

export default ProjectCard;