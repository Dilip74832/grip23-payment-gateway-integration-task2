import React from "react";
import {Box,Stack} from "@chakra-ui/react"
import Card from "./card";
import axios from "axios";

const Home=()=>{

    const checkoutHandler=async (amount)=>{
        const {data:{key}}=await axios.get("http://www.localhost:4000/api/getkey")

        const {data:{order}}=await axios.post("http://localhost:4000/api/checkout",{
            amount
        })
        const options = {
            key, 
            amount: order.amount, 
            currency: "INR",
            name: "j c dilip kumar",
            description: "Test Transaction",
            image: "https://media.licdn.com/dms/image/D5603AQEfUU1FBi5srA/profile-displayphoto-shrink_800_800/0/1675994350464?e=1692230400&v=beta&t=DdJX_yUkmGX5-bCRRpW4N-061LUMlg3LMxZ1BfreGzo",
            order_id: order.id, 
            callback_url: "http://localhost:4000/api/checkout/paymentverification",
            prefill: {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };
        const razor = new window.Razorpay(options);
        
            razor.open();
        
    }
        

    
    return(
        
        <Box>
            <Stack h={"100vh"} alignItems={"center"} justifyContent={"center"} direction={["column","row"]}>

                <Card amount={5000} img={"data:image/jpeg;base64,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"} checkoutHandler={checkoutHandler}/>
                <Card amount={3000} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nY4pSZHNtV8twyqd6ogzyKezpQtD67E56UAyJs3syw&usqp=CAU&ec=48600112"} checkoutHandler={checkoutHandler}/>
                
            </Stack>
        </Box>
    )}
    export default Home