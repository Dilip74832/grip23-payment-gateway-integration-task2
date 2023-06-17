import {Button, Image,Text,VStack} from "@chakra-ui/react"
import React from "react";

const Card=({amount,img,checkoutHandler})=>{
    return(
       <VStack>
        <Image src={img}/>
        <Text>{amount}</Text>
        <Button onClick={() =>checkoutHandler(amount)}>buy now</Button>
       </VStack>

    )
}
export default Card