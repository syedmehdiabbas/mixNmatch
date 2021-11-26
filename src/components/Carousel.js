import React, { useState } from 'react';
import { Text, Box, Flex, useColorModeValue, Image } from '@chakra-ui/react';

const Carousel = ({ slides }) => {
  const arrowStyles = {
    cursor: 'pointer',
    pos: 'absolute',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    p: '16px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    userSelect: 'none',
    _hover: {
      opacity: 0.8,
      bg: 'black',
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide(s => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide(s => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex w="full" p={2} alignItems="center" justifyContent="center">
      <Flex
        w="250px"
        overflow="clip"
        pos="relative"
        borderRadius="md"
        boxShadow="xl"
      >
        <Flex h="150px" w="full" {...carouselStyle}>
          {slides.length !== 0 &&
            slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                <Image
                  objectFit="cover"
                  src={slide.url}
                  boxSize="full"
                  backgroundSize="cover"
                />
              </Box>
            ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide} color="grey.500">
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide} color="grey.500">
          &#10095;
        </Text>
      </Flex>
    </Flex>
  );
};
export default Carousel;
