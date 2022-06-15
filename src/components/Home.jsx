import { Grid, Box, GridItem,Input, Image, Heading, Text, Button } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'

import axios from "axios"
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
//import { Image, Box, Heading } from '@chakra-ui/react'
export default function Home() {
  const [prod, setData] = useState([])
  const [search, setSearch] = useState([])
  const [show, setShow] = useState("")
  const {id} = useParams()
  useEffect(()=>{
    getData()
  },[])


  const getData = async() =>{
    try{
      const res = await axios.get("https://fakestoreapi.com/products")
      setData(res.data);
    }catch(e){
       console.log(e)
    }
    
}
 
  const handleChange = (e) =>{
    
     setSearch(e.target.value)
    
  }
 //console.log(prod.length)
  const searching = () =>{
    let count = 0
    prod.map((e)=>{
      if(e.title === search){
       setShow(search)
     }else{
       count++
     }
  })
  if(count == prod.length){
    alert("no result to show")
  }
  }

  return (
    <>
        <Heading>Welcome to online shopping cart</Heading>
        <Input bgColor="#FC8181" w="30%" placeholder="search here" 
        onChange={handleChange} 
        ></Input>
        <Button onClick={searching}>Search</Button>
        <Box>
        <Box>
          <Heading color="#38A169">{show}</Heading>
          </Box>
        <Grid  templateColumns={{base:'repeat(2,70%)', md:'repeat(2, 48%)', lg:'repeat(4, 24%)'}}gap={4} p='3'>
             {
               prod.map((e,id)=>(
                <Link key={id} to={`/details/${e.id}`}>
                <Box boxShadow='2xl' p='6' rounded='md' bg='white'  w='250px' h="350px">
                  <Image w="100%" h="70%" src={e.image}></Image>
                  <Heading size="sm" mt="15px" noOfLines={2}>{e.title}</Heading>
                  <Heading size="sm" mt="15px">{e.price}</Heading>
                </Box>
                </Link>
               ))
             }
             
          </Grid>
        </Box>
    </>
  )
}
