import { Box, Image, Text } from "@chakra-ui/react";

const Category = ({ name, picture }) => {
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
          src={`./assets/job_pics/${picture}`}
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
            {name}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export default Category;
