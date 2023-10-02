import { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import { House } from "@phosphor-icons/react";


const CounterApp = () => {
	const [count, setCount] = useState(0);

	const decrement = () => {
		setCount(count - 1);
	};

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<Box className="container" w={"100vw"} h={"100vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
			<Link to="/">
				<Box display={"flex"} justifyContent={"center"} alignItems={"center"} position={"fixed"} top={{base: "5",md:"10"}} left={{base: "5",md:"10"}}  p={"10px"} w={{base: "50px", md: "70px"}} h={{base: "50px", md: "70px"}} bgColor={"white"} borderRadius={"10px"} border={"1px solid black"} _hover={{bgColor: "black", color: "white"}}>
				<House size={32} />
				</Box>
			</Link>

			<Box className="container2" w={{base: "80%",sm: "70%", md: "60%", lg: "50%"}} h={{base: "20%", sm: "25%", md: "40%", lg: "50%"}} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} bgColor={"black"} borderRadius={"20px"}>
				<Button className="button1"  onClick={decrement} fontSize={"24px"} h={"60px"} w={"60px"} display={"flex"}  alignItems={"center"} bgColor={"#EF0101"}>
					<MinusIcon />
				</Button>
				<Text className="angka" fontSize={{base: "100px",md : "150px"}} color={"white"}>{count}</Text>
				<Button className="button2" onClick={increment}  fontSize={"24px"} h={"60px"} w={"60px"} display={"flex"}  alignItems={"center"} bgColor={"#08B001"}>
                <AddIcon />
				</Button>
			</Box>
		</Box>
	);
};

export default CounterApp;
