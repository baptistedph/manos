import { Badge, Box, Flex } from "@chakra-ui/react";
import ProjectCardSwiper from "./ProjectCardSwiper";

const ProjectCard = () => {
	const project =
	{
		title: 'Aménagement de terrasses',
		description: "Un magnifique espace de vie extérieur. Polyvalent pour se détendre ou recevoir, les propriétaires peuvent profiter d'une soirée ensoleillée avec des amis ou profiter du soleil de la journée.",
		location: 'Paris IX',
		date: "2021",
		price: "20 001 - 50 000 €",
		where: "Paris XIII",
	}


	return (
		<Flex
			justifyContent='center'
		>
			{/* update sizes to match the responsive of the other pages */}
			<Box
				mt="1em"
				minWidth="343px"
				maxWidth='650px'
				ml='1em'

			>
				<Box
					fontWeight='bold'
					lineHeight='110%'
				>
					<ProjectCardSwiper />
					<Flex flexDirection="column">
						<div style={{ fontSize: 1 + "em", marginTop: 1.25 + "em" }}>{project.title}</div>
						<div style={{ fontSize: 0.9 + "em", color: "#94A3B8", marginTop: 0.75 + "em", fontWeight: 0.044 + "em" }}>{project.description}</div>
					</Flex>
				</Box>

				<Box

				>
					<Flex justifyContent='space-between'>
						<Box
							fontWeight='bold'

						>
							<div style={{ marginTop: 1.25 + "em" }} className="projectSmallTitle">Année de réalisation</div>
							<div style={{ color: "#94A3B8", fontWeight: 0.044 + "em" }} className="projectSmallText">{project.date}</div>
						</Box>
						<Box
							fontWeight='bold'
							mr='1em'
						>
							<div style={{ marginTop: 1.25 + "em" }} className="projectSmallTitle">Coût du projet</div>
							<div style={{ color: "#94A3B8", fontWeight: 0.044 + "em" }} className="projectSmallText">{project.price}</div>
						</Box>
					</Flex>
					<Box
						fontWeight='bold'
					>
						<div style={{ marginTop: 1.25 + "em" }} className="projectSmallTitle">Localisation</div>
						<div style={{ color: "#94A3B8", fontWeight: 0.044 + "em" }} className="projectSmallText">{project.where}</div>
					</Box>
				</Box>

				<Box
					mt="1.5em"
					mb="1em"
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					<Box as='button' borderRadius='md' bg='#319795' w='18.75em' h='2.5em' m='0' color='white' display='flex' justifyContent='center' alignItems='center'>
						<img src="./assets/icons/309678.svg" alt="enveloppe" className='spend' />
						<div mb='9.375em' flex={1}> Envoyer un message </div>
					</Box>
				</Box>
			</Box>
		</Flex>
	);
}

export default ProjectCard;