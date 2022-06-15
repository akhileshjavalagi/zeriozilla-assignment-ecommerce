import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { Box, Grid, Image, Heading, Text, Button } from "@chakra-ui/react"
export default function Details() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async (data) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const d = await res.json();
      setData(d)
     
    } catch (e) {
      console.log(e)
    }
  }


  const [product, setProduct] = useState([])
  const getCount = async() =>{
    const res = await axios.get("https://zorozill.herokuapp.com/cart")
    setProduct([...res.data])
  }
  console.log("count is",product.length)

  useEffect(()=>{
    getCount()
  },[])
  

  const cartData = async()=>{
    const initState = {
      data
    }
    axios.post("https://zorozill.herokuapp.com/cart", initState )
    .then(()=>alert("Item is added to the cart"))
    .catch((err)=>console.log(err.massege))
    }
  
    
  return (
    <>
      
      <Heading color="#4FD1C5">Details of this Product</Heading>
      <Box boxShadow='lg' p='6' rounded='md' bg='white' w="100%" m="auto" h="450px" display="flex" gap="30px">
        <Box h="100%" w="65%">
          <Image h="100%" w="100%" src={data.image}></Image>
        </Box>
        <Box w="100%">
          <Heading size="md">Title : {data.title}</Heading>
          <Text>Color : {data.color}</Text>
          <Text>Catogary : {data.category}</Text>
          <Text>Description : {data.description}</Text>
          <Text>Price : {data.price}</Text>
          <Button onClick={cartData} mt="100px">Add to Cart</Button>
        </Box>
      </Box>
    </>
  )
}
