import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react"

export default function home() {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w={"100vw"} h={"100vh"} flexDirection={"column"} bgColor={"white"}>
            <Box display={"flex"} justifyContent={"space-evenly"} w={{base: "100%",md: "70%"}}>
                <Link to="/counter">
                    <Text fontSize={{base: "12px", sm: "18px"}} w={{base: "70px", sm: "100px"}} h={{base: "70px",sm: "80px"}} bgColor={"white"} borderRadius={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"} border={"1px solid black"} _hover={{bgColor: "black", color: "white"}}>Counter</Text>
                </Link>
                <Link to="/stopwatch">
                    <Text fontSize={{base: "12px", sm: "18px"}} w={{base: "70px", sm: "100px"}} h={{base: "70px",sm: "80px"}} bgColor={"white"} borderRadius={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"} border={"1px solid black"} _hover={{bgColor: "black", color: "white"}}>Stopwatch</Text>
                </Link>
                <Link to="/filter">
                    <Text fontSize={{base: "12px", sm: "18px"}} w={{base: "70px", sm: "100px"}} h={{base: "70px",sm: "80px"}} bgColor={"white"} borderRadius={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"} border={"1px solid black"} _hover={{bgColor: "black", color: "white"}}>Filter</Text>
                </Link>
                <Link to="/chatbox">
                    <Text fontSize={{base: "12px", sm: "18px"}} w={{base: "70px", sm: "100px"}} h={{base: "70px",sm: "80px"}} bgColor={"white"} borderRadius={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"} border={"1px solid black"} _hover={{bgColor: "black", color: "white"}}>ChatBox</Text>
                </Link>
            </Box>

            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} mt={"20px"} >
                <Text>Exercise 7</Text>
                <Box display={"flex"} mt={"30px"}>
                <Text m={"10px"} fontSize={{base: "12px", sm: "18px"}}>Bas hasibuan</Text>
                <Text m={"10px"} fontSize={{base: "12px", sm: "18px"}}>Fariez Arfian</Text>
                <Text m={"10px"} fontSize={{base: "12px", sm: "18px"}}>Tengku Chairu Abda</Text>
                </Box>
            </Box>
        </Box>
    )
}