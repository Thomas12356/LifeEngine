import AgentChatHeader from "@/features/agent-chat/components/AgentChatHeader"
import AgentChatWindow from "@/features/agent-chat/components/AgentChatWindow"
import AgentSuggestionWindow from "@/features/agent-chat/components/AgentSuggestionWindow"
import AgentTextInput from "@/features/agent-chat/components/AgentTextInput"

import { VStack, HStack } from "@chakra-ui/react"

export default function AgentLayout() {
    return (
        <VStack>
            <AgentChatHeader />
            <HStack>
                <AgentChatWindow />
                <AgentSuggestionWindow />
            </HStack>
            <AgentTextInput />
        </VStack>
    )
}