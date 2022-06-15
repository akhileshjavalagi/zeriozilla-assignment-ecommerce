import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Grid, Box, GridItem, Image, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function FootWear() {
  const [data, setData] = useState([])
  const [page , setPage] = useState(1)
  const {id} = useParams()
  useEffect(()=>{
    getData()
  },[page])

  const getData = async(data) =>{
      try{
        const res = await axios.get("https://fakestoreapi.com/products/category/women's%20clothing")
        setData([...res.data]);
      }catch(e){
         console.log(e)
      }
      
  }


const sorting = (e) =>{
  const text = e.target.value;
  const update = data.sort((a,b)=>{
    if(text == "low"){
      return a.price - b.price
    }
    else if(text == "high"){
      return b.price - a.price
    }
  })
  setData([...update])
}

//console.log(data)



  return (
    <Box >
      <Heading color="#E53E3E">Footwear products</Heading>
      <select name="" id="" onChange={sorting}>
        <option value="">choose by price</option>
        <option value="low">low to high</option>
        <option value="high">high to low</option>
      </select>
      <Grid  templateColumns={{base:'repeat(2,70%)', md:'repeat(2, 48%)', lg:'repeat(4, 24%)'}}gap={4} p='3'>
             {
               data.map((e)=>(
                 <Link to={`/women's_cloth/${e.id}`}>
                <Box boxShadow='2xl' p='6' rounded='md' bg='white'  w='250px' h="350px">
                  <Image w="100%" h="70%" src={e.image}></Image>
                  <Heading size="sm"  noOfLines={2}>{e.title}</Heading>
                  <Heading size="sm" mt="15px">{e.price}</Heading>
                </Box>
                </Link>
               ))
             }
             
          </Grid>
          <Button onClick={()=>{
    setPage(page-1)
    }}>previous</Button>
          <Button onClick={()=>{
    setPage(page+1)
    }}>next</Button>
          
    </Box>
    )
}
