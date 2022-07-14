import React from 'react';
import {Box, Flex, Center, Text, Container} from '@chakra-ui/react';
import NavBar from './NavBar.tsx';

const Layout = ({children } : { children : React.ReactChild | React.ReactChild[];
 }) => {
    return (
      <>
      <Box overflow='none' bgColor='primaryWhite' position="absolute" zIndex='-2' top="0" bottom="0" left="0" right="0">
      <NavBar/>
      </Box>
      <Container width='100%' overflow='none' maxW='100%'>
      <Box
        overflow='none'
        left='20%'
        flex='1'
        width='80%'
        bg='transparent'
        position='relative'
        px={['20px', '20px', '45px']}
        pt={['20px', '20px', '45px']}
        pb={'80px'}
        border='1px solid'
        height='100vh'
      >
        {children}
      </Box>
      </Container>
      </>
    );
  }

export default Layout;
