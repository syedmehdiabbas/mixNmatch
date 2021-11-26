import React, { useState, useEffect } from 'react';
import { VStack } from '@chakra-ui/react';
import Carousel from './../components/Carousel';
import { readData } from './../firebase/firebase';

function Home() {
  const [tops, setTops] = useState([]);
  const [bottoms, setBottoms] = useState([]);
  const [shoes, setShoes] = useState([]);

  useEffect(async () => {
    const dataTops = await readData('tops');
    const dataBottoms = await readData('bottoms');
    const dataShoes = await readData('shoes');
    setTops(dataTops);
    setBottoms(dataBottoms);
    setShoes(dataShoes);
  }, []);

  return (
    <VStack minH="100vh" justifyContent="center">
      <Carousel slides={tops} />
      <Carousel slides={bottoms} />
      <Carousel slides={shoes} />
    </VStack>
  );
}

export default Home;
