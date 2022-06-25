import { Grid, GridItem, Heading, Flex, fontSize, Box } from "@chakra-ui/react";
import { fetchApi } from "../lib/api";
import { getServerSideProps } from "../pages";
const Contact = ({ users }) => {
  console.log("Contact", users);
  const user = users.filter((user) => user.id === 2);
  console.log("user solo", user);
  const infos = ["phone", "street", "email", "post_code", "city"];
  const refactoredKeys = {
    phone: "Téléphone",
    street: "Adresse",
    email: "Email",
    post_code: "Code postal",
    city: "Ville",
  };
  return (
    <div>
      <Box mx="auto" maxW="4xl">
        <Grid templateColumns="repeat(2, 1fr)" mt={5} ml={4} mb={5}>
          <GridItem colSpan={2} mb={3}>
            <Heading size="sm" fontSize={{ base: "14px", lg: "22px" }}>
              Contact
            </Heading>
          </GridItem>
          {infos.map((info) => (
            <GridItem>
              <Heading size="sm" fontSize={{ base: "12px", lg: "18px" }} mb={1}>
                {refactoredKeys[info]}
              </Heading>
              <Heading
                fontSize={{ base: "12px", lg: "18px" }}
                mb={2.5}
                fontWeight="normal"
                color="#94A3B8"
              >
                {user.info ? user.info : "pas d'information"}
              </Heading>
            </GridItem>
          ))}
        </Grid>
        <Heading
          size="sm"
          ml={4}
          mb={3}
          fontSize={{ base: "14px", lg: "22px" }}
        >
          Localisation
        </Heading>
        <Flex
          justify="center"
          w={{ base: "90%", maxW: "fill container" }}
          mx={4}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97138.01641568248!2d2.232014774065856!3d48.87020059548142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1655900798693!5m2!1sfr!2sfr"
            width="100%"
            height="300"
            style={{ borderRadius: "6px" }}
          ></iframe>
        </Flex>
      </Box>
    </div>
  );
};

export default Contact;
