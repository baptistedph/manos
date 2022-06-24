import React, { useRef, useState } from "react";

// Import chakra box
import { Box, Badge, StarIcon, Text, Flex, Spacer } from '@chakra-ui/react'

const ProjectCardProfile = () => {
    const project = {
        title: 'Bibliothèque',
        description: "Un magnifique espace de vie extérieur. Polyvalent pour se détendre ou recevoir, les propriétaires peuvent profiter d'une soirée ensoleillée avec des amis ou profiter du soleil de la journée.",
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
	
    );
}
 
export default ProjectCardProfile;