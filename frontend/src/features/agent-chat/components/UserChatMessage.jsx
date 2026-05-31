
import { Text, Box, HStack, Spacer } from "@chakra-ui/react"

export default function UserChatMessage({ message }) {
    return (
        <HStack width="100%" pr="10px">
            <Spacer />
        <Box px="15px" py="3px" bg="blueLight.100" borderRadius={"10px"}>
            <Text lineHeight={1.2} fontSize="md">{message.content}</Text>
        </Box>
        </HStack>
    )
}