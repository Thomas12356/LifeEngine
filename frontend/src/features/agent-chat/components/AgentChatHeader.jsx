/**
 * @file AgentChatHeader.jsx
 * @module AgentChatHeader
 * @description Renders the header for the agent chat interface.
 * 
 * @WIP Component is unfinished, Action history text is placeholder for a popover link to view the agent's action history.
 */

/*------------------Imports------------------*/
import { Stack, Text } from "@chakra-ui/react"

/**
 * AgentChatHeader
 *
 * Renders a title for the agent chat interface and a placeholder for an action history link.
 *
 * @component
 * @returns {JSX.Element} AgentChatHeader
**/
export default function AgentChatHeader() {
    return (
        <Stack direction="row" justifyContent="space-between" width="100%" align="center">
            <Text textStyle="darkBlueText">Ellie Agent</Text>
        </Stack>
    )
}