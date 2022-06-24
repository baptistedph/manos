import React, { useRef, useState } from "react";

// Import chakra box
import { Box, Badge, StarIcon, Text, Flex, Spacer } from '@chakra-ui/react'
import ProjectCardSearchPicsSwiper from "./ProjectCardSearchPicsSwiper";
import ProjectCardSearchTextSwiper from "./ProjectCardSearchTextSwiper";

const ProjectCardSearch = () => {
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
					<ProjectCardSearchPicsSwiper />
				</Box>
				<Box>
					<ProjectCardSearchTextSwiper />
				</Box>
			</Flex>
		</Box>
	)
};

export default ProjectCardSearch;