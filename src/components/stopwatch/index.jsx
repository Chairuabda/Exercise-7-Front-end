import { useState, useEffect } from "react";
import { VStack, Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { House } from "@phosphor-icons/react";

const Stopwatch = () => {
	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(false);
	useEffect(() => {
		let interval;
		if (running) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else if (!running) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [running]);

	return (
		<VStack
			className="stopwatch"
			backgroundColor="black"
			width="100vw"
			margin="auto"
			paddingTop="50px"
			fontWeight="lg"
			height="100vh"
			justifyContent={"center"}
		>
			<Link to="/">
				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					position={"fixed"}
					top={{ base: "5", md: "10" }}
					left={{ base: "5", md: "10" }}
					p={"10px"}
					w={{ base: "50px", md: "70px" }}
					h={{ base: "50px", md: "70px" }}
					bgColor={"black"}
					color={"white"}
					borderRadius={"10px"}
					border={"1px solid white"}
					_hover={{ bgColor: "white", color: "black" }}
				>
					<House size={32} />
				</Box>
			</Link>
			<Box className="numbers" color="white" fontSize="4rem">
				<span>
					{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}:
				</span>
				<span>
					{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
				</span>
				<span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
			</Box>
			<ButtonGroup className="buttons">
				<Button
					onClick={() => setRunning(true)}
					backgroundColor="green"
					color="white"
					padding="25px"
				>
					Start
				</Button>
				<Button
					onClick={() => setRunning(false)}
					backgroundColor="red"
					color="white"
					padding="25px"
				>
					Stop
				</Button>
				<Button
					onClick={() => setTime(0)}
					backgroundColor="yellow"
					color="white"
					padding="25px"
				>
					Reset
				</Button>
			</ButtonGroup>
		</VStack>
	);
};
export default Stopwatch;
