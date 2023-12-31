import { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { House } from "@phosphor-icons/react";

export default function Filter() {
	const [input, setInput] = useState("");

	const originalList = [
		"Banana",
		"Apple",
		"Orange",
		"Manggo",
		"Pineapple",
		"Watermelon",
		"Strawberry",
		"Persimmon",
	];

	const handelinput = (event) => {
		setInput(event.target.value);
	};

	const formatList = originalList.filter((item) =>
		item.toLowerCase().includes(input.toLowerCase())
	);

	return (
		<Box
			width={"100vw"}
			h={"100vh"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Link to="/">
				<Box display={"flex"} justifyContent={"center"} alignItems={"center"} position={"fixed"} top={{base: "5",md:"10"}} left={{base: "5",md:"10"}}  p={"10px"} w={{base: "50px", md: "70px"}} h={{base: "50px", md: "70px"}} bgColor={"white"} borderRadius={"10px"} border={"1px solid black"} _hover={{bgColor: "black", color: "white"}}>
				<House size={32} />
				</Box>
			</Link>
			<Box
				bgGradient={"linear(to-br, #FFC553, #FA3C32, #9D2EBD)"}
				w={{ base: "100%", md: "60%" }}
				h={{ base: "100%", md: "80%" }}
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"center"}
				alignItems={"center"}
				borderRadius={{base: "0px",md: "10px"}}
			>
				<Box
					width={"50%"}
					h={"100%"}
					display={"flex"}
					justifyContent={"start"}
					alignItems={"center"}
				>
					<Box
						display={"flex"}
						flexDirection={"column"}
						width={"100%"}
						height={"450px"}
						justifyContent={"start"}
					>
						<Box display={"flex"} alignItems={"center"}>
							<Text>Search:</Text>
							<Input
								type="search"
								value={input}
								onChange={handelinput}
								bgColor={"white"}
								ml={"10px"}
							/>
						</Box>
						{formatList.map((item, index) => (
							<Text
								position={"relative"}
								left={"60px"}
								border={"1px solid black"}
								key={index}
								w={"50%"}
								borderRadius={"5px"}
								textAlign={"center"}
								bgColor={"white"}
								mt={"20px"}
							>
								{item}
							</Text>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
}