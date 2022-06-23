import React, { useRef, useState } from "react";

// Import chakra box
import { Box, Badge, StarIcon, Text, Flex, Spacer } from '@chakra-ui/react'

const TabBarProfileSettings = () => {
	return (
		<div>
			<Box className='tabBarProfileSetting'>
				<Box className='tabProfileSetting'>
					Profil
				</Box>
				<Box className='tabProfileSetting'>
					Projets
				</Box>
				<Box className='tabProfileSetting'>
					Paramètres
				</Box>
			</Box>
		</div>
	);
};

export default TabBarProfileSettings;