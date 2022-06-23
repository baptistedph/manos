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
  return (
    <div>
      <Text fontSize="2xl" m="20px" fontWeight="bold">
        Planning 2022
      </Text>
      <Box
        borderWidth="2px"
        borderRadius="10px"
        overflow="hidden"
        w="90%"
        h="500px"
        m="20px"
      >
        <TableContainer>
          <Center
            h="110px"
            color="Black"
            justifyContent="space-evenly"
            fontSize="2xl"
          >
            <Button
              borderRadius="50%"
              backgroundColor="white"
              border="1px lightgrey solid"
              left="8px"
            >
              &lsaquo;
            </Button>
            January 2022
            <Button
              borderRadius="50%"
              backgroundColor="white"
              border="1px lightgrey solid"
              right="8px"
            >
              &rsaquo;
            </Button>
          </Center>

          <Table variant="simple" size="10px" rowGap="10px" display="grid">
            <Thead>
              <Tr
                h="50px"
                fontSize="12px"
                display="grid"
                gridTemplateColumns="repeat(7,40px)"
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
              h="300px"
              display="grid"
              alignItems="center"
              gridTemplateRows="repeat(5,50px)"
            >
              <Tr
                display="grid"
                gridTemplateColumns="repeat(7,40px)"
                justifyContent="center"
                justifyItems="center"
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
                <Td border="none">2</Td>
              </Tr>

              <Tr
                display="grid"
                gridTemplateColumns="repeat(7,40px)"
                justifyContent="center"
                justifyItems="center"
              >
                <Td border="none">3</Td>
                <Td border="none">4</Td>
                <Td border="none">5</Td>
                <Td border="none">6</Td>
                <Td border="none">7</Td>
                <Td border="none">8</Td>
                <Td border="none">9</Td>
              </Tr>
              <Tr
                display="grid"
                gridTemplateColumns="repeat(7,40px)"
                justifyContent="center"
                justifyItems="center"
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
                gridTemplateColumns="repeat(7,40px)"
                justifyContent="center"
                justifyItems="center"
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
                gridTemplateColumns="repeat(7,40px)"
                justifyContent="center"
                justifyItems="center"
                gap="10px 0"
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
                gridTemplateColumns="repeat(7,40px)"
                justifyContent="center"
                justifyItems="center"
                gap="10px 0"
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
    </div>
  );
};

export default Planning_card;
