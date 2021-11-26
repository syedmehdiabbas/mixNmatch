import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Link,
  HStack,
  Flex,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import { Link as RouterLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" maxW="1200px" px={2} mx="auto">
        <Flex justifyContent="space-between">
          <Heading color="tomato">mixNmatch</Heading>
          <HStack spacing={8} alignItems="center">
            <Link fontSize="sm" to="/" as={RouterLink}>
              HOME
            </Link>
            <Link fontSize="sm" to="upload" as={RouterLink}>
              UPLOAD
            </Link>
            <ColorModeSwitcher justifySelf="flex-end" />
          </HStack>
        </Flex>
        <Outlet />
      </Box>
    </ChakraProvider>
  );
}

export default App;
