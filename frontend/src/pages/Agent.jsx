import AgentChat from "@/features/agent-chat/AgentChat"
import { WidgetBox } from "@ui-components/WidgetBox"
import { Box } from "@chakra-ui/react"

export default function Agent() {
    return (
        <Box
            w="100%"
            h="100%"
            minH={0}
            display="flex"
            px={3}
            py={2}
            overflow="hidden"
            pb="10"
        >
            <WidgetBox
                w="100%"
                h="100%"
                minH={0}
                display="flex"
                flexDirection="column"
                overflow="hidden"
            >
                <AgentChat />
            </WidgetBox>
        </Box>
    )
}