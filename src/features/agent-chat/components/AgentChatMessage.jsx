
import { Text, Box, Icon } from "@chakra-ui/react"
import { RiChatAiLine } from "react-icons/ri";


export default function AgentChatMessage({ message }) {
    return (
        <Box>
            <Icon>
                <RiChatAiLine />
            </Icon>
            <Text fontSize="md">{message.content}</Text>
        </Box>
    )
}