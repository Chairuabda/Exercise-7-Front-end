import { Box, Text } from "@chakra-ui/react";
import { UserCircle } from "@phosphor-icons/react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

export default function List() {
	const location = useLocation();
	const input = location.state.input
	return (
		<Box
			w={"100vw"}
			h={"100vh"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Link to="/chatbox">
				<Box display={"flex"} justifyContent={"center"} alignItems={"center"} position={"fixed"} top={{base: "5",md:"10"}} left={{base: "5",md:"10"}}  p={"10px"} w={{base: "50px", md: "70px"}} h={{base: "50px", md: "70px"}} bgColor={"white"} borderRadius={"10px"} border={"1px solid black"} _hover={{bgColor: "black", color: "white"}}>
				<ArrowLeft size={32} />
				</Box>
			</Link>
			<Box
				bgColor={"black"}
				w={{base: "90%",sm: "450px", md: "600px"}}
				h={{base: "30%" , md:"300px"}}
				display={"flex"}
				flexDirection={"column"}
				borderRadius={"10px"}
			>
				<Box
					flexGrow={"1"}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
				>
					<Text fontSize={{base: "20px", sm: "28px", md: "42px"}} fontWeight={"600"} color={"white"}>
						ChiChat - Express Your Feeling
					</Text>
				</Box>
				<Box
					display={"flex"}
					flexGrow={"1"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						w={"90%"}
					>
						<UserCircle size={52} color="blue"/>
						<Box w={"100%"} h={"80px"} ml={"10px"} bgColor={"blue"} borderRadius={"20px 20px 20px 0"} p={"5px 10px"} color={"white"} fontSize={"20px"}>{input}</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
