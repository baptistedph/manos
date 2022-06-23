import { Grid, GridItem, Heading, Flex } from "@chakra-ui/react";

const Contact = () => {
  const infos = [
    "Téléphone",
    "Adresse",
    "Email",
    "codePostal",
    "Secteur",
    "Ville",
  ];
  return (
    <div className="container">
      <Grid templateColumns="repeat(2, 1fr)" mt={5} ml={4} mb={5}>
        <GridItem colSpan={2} mb={3}>
          <Heading as="h1" size="sm">
            Contact
          </Heading>
        </GridItem>
        {infos.map((info) => (
          <GridItem key={info} as="samp" mb={2.5}>
            <Heading size="xs">{info}</Heading>
          </GridItem>
        ))}
      </Grid>
      <Heading size="sm" ml={4} mb={3}>
        Localisation
      </Heading>
      <Flex justify="center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97138.01641568248!2d2.232014774065856!3d48.87020059548142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1655900798693!5m2!1sfr!2sfr"
          width="90%"
          height="450"
          style={{ borderRadius: "6px" }}
        ></iframe>
      </Flex>
    </div>
  );
};

export default Contact;
