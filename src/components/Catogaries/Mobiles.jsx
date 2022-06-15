
import React, { useEffect, useState } from 'react'
import { Grid, Box, GridItem, Image, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';

export default function Mobiles() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const {id} = useParams()
  useEffect(()=>{
    getData()
  },[page])

  const getData = async(data) =>{
      try{
        const res = await axios.get("https://fakestoreapi.com/products/category/electronics")
        setData([...res.data]);
      }catch(e){
         console.log(e)
      }
  }
//console.log(data)

const sorting = (e) =>{
  const input = e.target.value;
  const updated = data.sort((a,b)=>{
    if(input == "low"){
      return a.price - b.price
    }
    else if(input == "high"){
      return b.price - a.price
    }
  })
  setData([...updated])
}
//console.log(data)
  return (
    <div>
     <Heading color="#E53E3E">Electronics Products</Heading>
     <select name="" id="" onChange={sorting}>
     <option value="low" >choose by price</option>
     <option value="low" >low to high</option>
     <option value="high">high to low</option>
     </select>
      <Grid  templateColumns={{base:'repeat(1,99%)', md:'repeat(2, 48%)', lg:'repeat(4, 24%)'}}gap={4} p='3'>
             {
               data.map((e)=>(
                 <Link to={`/electronics/${e.id}`}>
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
            setPage(page - 1)
          }}>previous</Button>
          <Button onClick={()=>{
            setPage(page + 1)
          }}>next</Button>
    </div>
  )
}
