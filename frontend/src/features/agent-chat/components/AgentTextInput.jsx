import { HStack, Input, IconButton } from "@chakra-ui/react"
import { useState } from "react";
import { IoMdSend } from "react-icons/io";


export default function AgentTextInput({ onSendMessage, isLoading }) {

    const [message, setMessage] = useState("");

    const handleSendMessage = async () => {
        if (!message.trim() || isLoading) return; // Don't send empty messages
        const messageToSend = message;
        setMessage(""); // Clear the input after sending

        await onSendMessage(messageToSend);
    };

        const handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            await handleSendMessage();
        }
    };


    return (
        <HStack width="100%" my={1}>

            <Input 
            textStyle="defaultText" 
            fontWeight="400" 
            bg="blueLight.50" 
            p="6" 
            mr="5" 
            variant="plain" 
            borderRadius="10px" 
            width="100%" 
            placeholder="Type your message..." 
            onChange={(e) => setMessage(e.target.value)} 
            onKeyDown={handleKeyDown}
            value={message}
            disabled={isLoading}
            />

            <IconButton bg="blueLight.500" borderRadius="10px" disabled={isLoading}>
                <IoMdSend />
            </IconButton>

        </HStack>
    )
}