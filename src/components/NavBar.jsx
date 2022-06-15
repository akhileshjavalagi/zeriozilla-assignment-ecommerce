import React, {useState, useEffect } from 'react'
import axios from 'axios'
import {
            Menu,
            MenuButton,
            MenuList,
            MenuItem,
            MenuItemOption,
            MenuGroup,
            MenuOptionGroup,
            MenuDivider,
            Button,
            Box,
            Heading,
            Image,
            Text
            } from '@chakra-ui/react'
import { ChevronDownIcon} from "@chakra-ui/icons"
import { Link } from "react-router-dom"

export default function NavBar() {
  const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }
return (
 <>
 
 <Box w="100%"> 
  <Box borderRadius="10px" bgColor="#CBD5E0"  w="100%" h="60px" display="flex"  gap="20px" mt="10px"> 
  <Box w="20%">
  <Image w="50%" h="100%"  src="https://i.pinimg.com/originals/92/0b/3d/920b3d90f07d4f56b37e2d8768d73422.jpg"></Image>

  </Box>

<Box p="10px">
<Menu>
  <Box>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Catogaries
  </MenuButton>
  <MenuList>
   <Link to="/mens"><MenuItem>Men's clothing</MenuItem></Link>
    <Link to="/womens"><MenuItem>Jewellery</MenuItem></Link>
    <Link to="/women's_cloth"><MenuItem>Women's Clothing</MenuItem></Link>
    <Link to="/electronics"><MenuItem>Electronics</MenuItem></Link>
  </MenuList>
  </Box>
  </Menu>
  </Box>
  <Box p="10px" display="flex">
  <Box>
  <Menu>
  <Link to="/home"><MenuItem>HOME</MenuItem></Link>
   </Menu>
  </Box>
  <Box>
  <Menu>
  <Link to="/about"><MenuItem>ABOUT US</MenuItem></Link>
  </Menu>
  </Box>
  <Box>
  <Menu>
  <Link to="/contact"><MenuItem>CONTACT US</MenuItem></Link>
   </Menu>
  </Box>
  <Box>
  <Menu>
  <Link to="/fandq"><MenuItem>F AND Q</MenuItem></Link>
   </Menu>
  </Box>
  <Box>
  <Menu>
  <Link to="/cart"><Image w="100%" h="100%" src="https://img.icons8.com/windows/344/shopping-cart.png"></Image></Link>
  </Menu>
  </Box>
  </Box>
</Box>
</Box> 
    </>
  )
}
