import { Box, Image, Text } from "@chakra-ui/react";

const Category = () => {
  const property = {
    imageAlt: "Rear view of modern home with pool",
  };

  return (
    <Box display="flex" mt="0.75em" ml="1em">
      <Box
        width="7.625em"
        height="6.1875em"
        borderWidth="0.0625em"
        borderRadius="lg"
        overflow="hidden"
        mr="0.625em"
      >
        <Image
          src="./assets/job_pics/large-home-g4446d6391_1280.jpg"
          height="4.5em"
          width="7.625em"
          alt={property.imageAlt}
        />

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="1.6875em"
        >
          <Text fontSize="0.625em" fontWeight="bold">
            Architecte
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export default Category;
