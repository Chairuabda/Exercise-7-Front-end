import { Box, Text, Button, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PaperPlaneRight } from "@phosphor-icons/react";
import { useState } from "react";

export default function Chatbox() {
    const [input, setInput] = useState("");
    const Navigate = useNavigate()

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const addText = () => {
        Navigate("/list", {state : {input}})
        setInput("");
    }

	return (
		<Box
			w={"100vw"}
			h={"100vh"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
		>
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
                        
						<Textarea
							size={"sm"}
							mr={"10px"}
							borderColor={"black"}
							placeholder="What's on your mind?"
                            value={input}
                            onChange={handleInput}
                            bgColor={"white"}
                            borderRadius={"10px"}
						></Textarea>
							<Button
								display={"flex"}
								bgColor={"#1B82FC"}
								borderRadius={"50%"}
								w={"50px"}
								h={"50px"}
								padding={"0"}
								justifyContent={"center"}
								alignItems={"center"}
                                onClick={addText}
							>
								<PaperPlaneRight size={28} color="white" />
							</Button>
					</Box>
				</Box>
			</Box>
            

		</Box>
	);
}
