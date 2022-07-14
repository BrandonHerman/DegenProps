import React from 'react';
import {Box, Flex, Center, Text, Container} from '@chakra-ui/react';
import NavBar from './NavBar.tsx';

const Layout = ({children } : { children : React.ReactChild | React.ReactChild[];
 }) => {
    return (
      <>
      <Box overflow='none' mb='0px' height='100%' bgColor='primaryWhite' position="absolute" zIndex='-2' top="0" bottom="0" left="0" right="0">
      <NavBar/>
      </Box>
      <Container mb='0px' width='100%' overflow='none' maxW='100%'>
      <Box
        left='20%'
        maxHeight='100vh'
          overflow='scroll'
        flex='1'
        width='80%'
        bg='primaryWhite'
        position='relative'
        px={['20px', '20px', '45px']}
        pt={['20px', '20px', '45px']}
        pb={'80px'}
        mb='0px'
        border='3px solid'
        borderColor = 'primaryBlue'
        height='calc(100vh)'
      >
        <Box>
        {children}
        </Box>
      </Box>
      </Container>
      </>
    );
  }

export default Layout;
