import Link from 'next/link';
import {useRouter} from 'next/router';
import { Icon, Box, } from '@chakra-ui/react';
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
    border='1px solid'
    borderColor='white'
    zIndex={10}/>

  );
}

export default NavBar;
