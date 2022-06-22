import { Grid, GridItem, Image } from "@chakra-ui/react";

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
      <Grid templateColumns="repeat(2, 1fr)" gap={6} m={4}>
        <GridItem colSpan={2}>Contact</GridItem>
        {infos.map((info) => (
          <GridItem key={info} as="samp">
            {info}
          </GridItem>
        ))}
        <GridItem colSpan={2} as="samp">
          Localisation
        </GridItem>
      </Grid>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97138.01641568248!2d2.232014774065856!3d48.87020059548142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1655900798693!5m2!1sfr!2sfr"
        width="100%"
        height="450"
      ></iframe>
    </div>
  );
};

export default Contact;
