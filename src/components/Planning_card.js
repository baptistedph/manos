import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import { Grid, GridItem } from "@chakra-ui/react";
// This button will have no right borderRadius

const Planning_card = () => {
  const toto = () => {
    console.log("toto");
  };
  return (
    <Box maxWidth="23.4375em" onClick={toto}>
      <Text
        fontSize="0.875em"
        ml="1em"
        mb="0.75em"
        mt="1.25em"
        fontWeight="bold"
      >
        Planning 2022
      </Text>
      <Box
        borderWidth="0.0625em"
        borderRadius="0.625em"
        overflow="hidden"
        w="90%"
        h="19em"
        ml="1em"
        mr="1em"
      >
        <TableContainer>
          <Center
            h="3.4375em"
            color="Black"
            justifyContent="space-evenly"
            alignItems="flex-end"
            fontSize="1em"
            fontWeight="medium"
          >
            <Button
              borderRadius="50%"
              backgroundColor="white"
              border="0.0625em lightgrey solid"
              size="xs"
              left="1.5em"
            >
              &lsaquo;
            </Button>
            January 2022
            <Button
              borderRadius="50%"
              backgroundColor="white"
              border="0.0625em lightgrey solid"
              size="xs"
              right="1.5em"
            >
              &rsaquo;
            </Button>
          </Center>

          <Table
            variant="simple"
            size="0.625em"
            display="grid"
            gridTemplateRows="3em 12.5em"
          >
            <Thead className="planning_thead">
              <Tr
                h="50px"
                fontSize="12px"
                display="grid"
                gridTemplateColumns="repeat(7,2.525em)"
                justifyContent="center"
                justifyItems="center"
                alignItems="center"
              >
                <Th border="none" color="#999A99" textTransform="none">
                  Mon
                </Th>
                <Th border="none" color="#999A99" textTransform="none">
                  Tue
                </Th>
                <Th border="none" color="#999A99" textTransform="none">
                  Wed
                </Th>
                <Th border="none" color="#999A99" textTransform="none">
                  Thu
                </Th>
                <Th border="none" color="#999A99" textTransform="none">
                  Fri
                </Th>
                <Th border="none" color="#999A99" textTransform="none">
                  Sat
                </Th>
                <Th border="none" color="#999A99" textTransform="none">
                  Sun
                </Th>
              </Tr>
            </Thead>

            <Tbody
              className="planning_tbody"
              h="300px"
              display="grid"
              alignItems="center"
              gridTemplateRows="repeat(6,1.875em)"
              // 2.525em
            >
              <Tr
                display="grid"
                gridTemplateColumns="repeat(7,1.875em)"
                justifyContent="center"
                justifyItems="center"
                alignItems="center"
              >
                <Td border="none" color="#E5E4E2">
                  27
                </Td>
                <Td border="none" color="#E5E4E2">
                  28
                </Td>
                <Td border="none" color="#E5E4E2">
                  29
                </Td>
                <Td border="none" color="#E5E4E2">
                  30
                </Td>
                <Td border="none" color="#E5E4E2">
                  31
                </Td>
                <Td border="none" color="#E5E4E2">
                  1
                </Td>
                <Td border="none">
                  <Circle size="2em" backgroundColor="#319795" color="white">
                    2
                  </Circle>
                </Td>
              </Tr>

              <Tr
                display="grid"
                gridTemplateColumns="repeat(7,1.875em)"
                justifyContent="center"
                justifyItems="center"
                alignItems="center"
              >
                <Td border="none">
                  <Circle size="2em" backgroundColor="#319795" color="white">
                    3
                  </Circle>
                </Td>
                <Td border="none">
                  <Circle size="2em" backgroundColor="#319795" color="white">
                    4
                  </Circle>
                </Td>
                <Td border="none">
                  <Circle size="2em" backgroundColor="#319795" color="white">
                    5
                  </Circle>
                </Td>
                <Td border="none">
                  <Circle size="2em" backgroundColor="#319795" color="white">
                    6
                  </Circle>
                </Td>
                <Td border="none">7</Td>
                <Td border="none">8</Td>
                <Td border="none">9</Td>
              </Tr>
              <Tr
                display="grid"
                gridTemplateColumns="repeat(7,1.875em)"
                justifyContent="center"
                justifyItems="center"
                alignItems="center"
              >
                <Td border="none">10</Td>
                <Td border="none">11</Td>
                <Td border="none">12</Td>
                <Td border="none">13</Td>
                <Td border="none">14</Td>
                <Td border="none">15</Td>
                <Td border="none">16</Td>
              </Tr>
              <Tr
                display="grid"
                gridTemplateColumns="repeat(7,1.875em)"
                justifyContent="center"
                justifyItems="center"
                alignItems="center"
              >
                <Td border="none">17</Td>
                <Td border="none">18</Td>
                <Td border="none">19</Td>
                <Td border="none">20</Td>
                <Td border="none">21</Td>
                <Td border="none">22</Td>
                <Td border="none" color="#E5E4E2">
                  23
                </Td>
              </Tr>
              <Tr
                display="grid"
                gridTemplateColumns="repeat(7,1.875em)"
                justifyContent="center"
                justifyItems="center"
                alignItems="center"
              >
                <Td border="none" color="#E5E4E2">
                  24
                </Td>
                <Td border="none" color="#E5E4E2">
                  25
                </Td>
                <Td border="none" color="#E5E4E2">
                  26
                </Td>
                <Td border="none" color="#E5E4E2">
                  27
                </Td>
                <Td border="none">28</Td>
                <Td border="none">29</Td>
                <Td border="none">30</Td>
              </Tr>
              <Tr
                display="grid"
                gridTemplateColumns="repeat(7,1.875em)"
                justifyContent="center"
                justifyItems="center"
                alignItems="center"
              >
                <Td border="none">31</Td>
                <Td border="none" color="#A8A9A8">
                  1
                </Td>
                <Td border="none" color="#A8A9A8">
                  2
                </Td>
                <Td border="none" color="#A8A9A8">
                  3
                </Td>
                <Td border="none" color="#A8A9A8">
                  4
                </Td>
                <Td border="none" color="#A8A9A8">
                  5
                </Td>
                <Td border="none" color="#A8A9A8">
                  6
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Planning_card;
