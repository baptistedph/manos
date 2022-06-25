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
          <Button border="1px solid #E2E8F0" bgColor="#ffff" mt="12px">
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
            <span>0km</span>
            <span>100km</span>
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
          <Button border="1px solid #E2E8F0" bgColor="#ffff" mt="12px">
            Budget
          </Button>
        </PopoverTrigger>
        <PopoverContent width="344px" height="80px">
          <PopoverArrow />
          <PopoverCloseButton />
          <Flex
            justify="space-between"
            ml="16px"
            mr="16px"
            mt="30px"
            fontSize="12px"
            fontWeight="bold"
          >
            <span>0€</span>
            <span>100€</span>
          </Flex>

          <RangeSlider
            aria-label={["min", "max"]}
            defaultValue={[10, 30]}
            width="315px"
            mr="10px"
            ml="10px"
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default Search;
