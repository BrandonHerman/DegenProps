import React from 'react';
import {Box, Flex, Center, Text, Container} from '@chakra-ui/react';
import NavBar from './NavBar.tsx';

const Layout = ({children } : { children : React.ReactChild | React.ReactChild[];
 }) => {
    return (
      <>
      <Box bgColor='#212121' position="absolute" zIndex='-2' top="0" bottom="0" left="0" right="0"/>
      <NavBar/>
      <Container width='100%' maxW='2500px'>
        <Center>
          <Text textColor='white' fontSize='5xl'>
          Degen Special
          </Text>
        </Center>
      <Flex width='100%'>
      <Box
        flex='1'
        bg='transparent'
        position='relative'
        px={['20px', '20px', '45px']}
        pt={['20px', '20px', '45px']}
        pb={'80px'}
        border='1px solid white'
        height='100vh'
      >
        {children}
      </Box>
      </Flex>
      </Container>
      </>
    );
  }

export default Layout;
