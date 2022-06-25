import {
  Box,
  Image,
  Input,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const Search = () => {
  return (
    <Box padding="16px" pt="25px">
      <Input width="343px" height="50px" placeholder="Que cherchez vous ?" />
      <Popover placement="bottom-start">
        <PopoverTrigger>
          <Button
            border="1px solid #E2E8F0"
            bgColor="#ffff"
            mt="12px"
            color="#94A3B8"
          >
            Localisation
          </Button>
        </PopoverTrigger>
        <PopoverContent width="343px" height="126px">
          <Flex justify-content="align" margin="10px" mt="15">
            <Image
              src="localisation.png"
              alt="Logo"
              width="22px"
              height="32px"
            />
            <Input
              ml="12px"
              placeholder="Votre localisation"
              width="234px"
              height="32px"
            />
          </Flex>
          <Flex
            justify="space-between"
            ml="10px"
            mr="20px"
            mt="10px"
            fontSize="12px"
            fontWeight="bold"
          >
            <span color="#94A3B8">0km</span>
          </Flex>

          <Slider
            ml="10px"
            mr="20px"
            aria-label="slider-ex-1"
            defaultValue={30}
            width="311px"
            height="16px"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <PopoverArrow />
          <PopoverCloseButton />
        </PopoverContent>{" "}
      </Popover>

      <Popover>
        <PopoverTrigger>
          <Button
            border="1px solid #E2E8F0"
            bgColor="#ffff"
            mt="12px"
            color="#94A3B8"
          >
            Budget
          </Button>
        </PopoverTrigger>
        <PopoverContent width="344px" height="110px">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <p>Veuillez indiquer votre budget :</p>
          </PopoverBody>
          <Flex ml="10px" mr="16px" mt="10px" justifyContent="space-between">
            <Input placeholder="Min €" />
            <Input placeholder="Max €" ml="12px" />
          </Flex>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default Search;
