// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
 import { Grid, Box, Button, GridItem, Image, Heading, Text } from '@chakra-ui/react'
// import { useParams } from 'react-router';

// export default function Cart() {
//   const {id} = useParams()
//   const [data, setData] = useState([]);
//   console.log(id)
//   useEffect(()=>{
//      getData()
//   },[])

//   const getData = async(data) =>{
//               try{
//                const res = await axios.get("http://localhost:3001/cart");
//                setData([...res.data]);
//               }catch(e){
//                           console.log(e)
//               }
//   }

// //  const deleting = async(id) =>{
// //    try{
// //     const res =  await axios.delete(`http://localhost:3001/cart/${id}`);
// //     console.log(res)
// //    }catch(e){
// //      console.log(e)
// //    }
     
// //     }
//  useEffect((id)=>{
//   deleting()
//  },[id])

//  const deleting = (id)=>{
//   console.log(id)
//   axios.delete(`http://localhost:3001/cart/${id}`)
//   .then(()=>alert("Item removed from the cart"))
//   .catch((err)=>console.log(err.message))
//   getData();
// }

  

//   return (
//     <div>
        
//                 <Heading>Cart Products</Heading>
//      <Grid  templateColumns={{base:'repeat(2,70%)', md:'repeat(2, 48%)', lg:'repeat(4, 24%)'}}gap={4} p='3'>
//              {
//                data.map((e)=>(
              
//                 <Box boxShadow='2xl' p='6' rounded='md' bg='white'  w='250px' h="450px">
//                   <Image w="100%" h="70%" src={e.data.image}></Image>
                  
//                   <Heading size="sm">{e.data.title}</Heading>
//                   <Text>{e.data.color}</Text>
//                   <Text>{e.data.category}</Text>
//                   <Text>{e.data.description}</Text>
//                   <Text>{e.data.price}</Text>
//                   <Text>{e.data.rating}</Text>
//                   <Button onClick={()=>deleting(e.id)}>Remove</Button>
//                 </Box>
               
//                ))
//              }
           
//           </Grid>
//     </div>
//   )
// }

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
// import {useDispatch, useSelector} from "react-redux"
// import { showCount } from '../redux/action'
export default function Cart() {
  const [product, setProduct] = useState([])
  //const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(showCount(product.length))
  // },[product.length])

  //dispatch(showCount())

  useEffect(()=>{
   getData()
  },[])
  
  const getData = async() =>{
    const res = await axios.get("https://zorozill.herokuapp.com/cart")
    setProduct([...res.data])
  }
 const deleting = (id)=>{
  console.log(id)
  axios.delete(`https://zorozill.herokuapp.com/cart/${id}`)
  .then(()=>alert("Item removed from the cart"))
  .catch((err)=>console.log(err.message))
  getData();
}
  
  
  return (
    <div>
    
     <Heading>Cart Products</Heading>
      <Grid  templateColumns={{base:'repeat(2,70%)', md:'repeat(2, 48%)', lg:'repeat(4, 24%)'}}gap={4} p='3'>
       {
        product.map((e)=>(
               <Box boxShadow='2xl' p='6' rounded='md' bg='white'  w='250px' h="450px">
                  <Image w="100%" h="70%" src={e.data.image}></Image>
                    <Heading size="sm"  noOfLines={1}>{e.data.title}</Heading>
                    {/* <Text>{e.data.color}</Text> */}
                    <Text >{e.data.category}</Text>
                    <Text  noOfLines={1}>{e.data.description}</Text>
                    <Heading size="sm">{e.data.price}</Heading>
                    {/* <Text>{e.data.rating}</Text> */}
                    <Button onClick={()=>deleting(e.id)}>Remove</Button>
                    </Box>
                ))
          }
          </Grid>
    </div>
  )
}
