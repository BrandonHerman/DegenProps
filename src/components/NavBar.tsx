import Link from 'next/link';
import {useRouter} from 'next/router';
import { Icon, UnorderedList, ListItem, Text, Box, Flex, Container } from '@chakra-ui/react';
import { FaMoneyBillWaveAlt, TbCrown, BsPersonFill} from 'react-icons';

const NavBar = () => {
  const router = useRouter();
  const navItems = [
    {
      label: 'Props',
      icon: {FaMoneyBillWaveAlt},
      url: '/props'
    },
    {
      label: 'Standings',
      icon: {TbCrown},
      url: '/standings'
    },
    {
      label: 'My Bets',
      icon: {BsPersonFill},
      url: '/myaccount'
    },
  ]
  return (
  <>
  <Box
    as='nav'
    w='256px'
    display={['block', 'block', 'block', 'none']}
    py='17px'
    style={{position: 'fixed'}}
    bottom='0'
    background='#212121'
    width='100%'
    left='0'
    height='80px'
    border='1px solid'
    borderColor='primaryBlue'
    zIndex={10}
  >
    <UnorderedList
      fontSize='18px'
      listStyleType='none'
      ml='0'
      display='flex'
      alignItems='center'
      justifyContent='space-evenly'
    >
     {navItems.map((nav, i) => {
      return (
        i < 3 && (
          <ListItem key={nav.label} color="primaryOrange">
            <Link href={nav.url}>
              <Flex
               alignItems="center"
               flexDir="column"
               justifyContent="center"
              >
               <Box w='24px' mb='8px'>
                 <Icon src={nav.icon}/>
               </Box>
               <Text color="primaryBlue" fontSize='13px'>
                 {nav.label}
               </Text>

              </Flex>
            </Link>
          </ListItem>
        )
       );
      }
    )}
   </UnorderedList>
  </Box>
  <Box
    position='sticky'
    top='0'
    left='0'
    as='nav'
    w='20%'
    display={['none', 'none', 'none', 'block']}
    borderRight='2px solid'
    borderColor='primaryBlue'
    pt='48px'
    h='100vh'
    pl='32px'>
  <Flex mb='65px'/>
  <UnorderedList fontSize={['15px', '16px', '17px', '15px', '18px', '20px']} listStyleType='none' ml='0'>
    {navItems.map((nav, i) => {
     return(
      <ListItem
       key={nav.label}
       mb='30px'
       ml='15%'
       color={
        router.pathname === nav.url ||
        (nav.url === '/' && router.pathname.includes('props'))
          ? 'primaryBlue' : 'primaryGreen'
        }
      >
       <Box display='inline-flex' flexDirection='column'>
        <Flex alignItems='center'>
         <Box w='20px' mr='16px'>
          <Icon src={nav.icon}/>
         </Box>
         <Link href={nav.url}>
          <Text> {nav.label} </Text>
         </Link>
        </Flex>
      </Box>
     </ListItem>
    );
   })}
   </UnorderedList>
  </Box>

  </>
  );
}

export default NavBar;
