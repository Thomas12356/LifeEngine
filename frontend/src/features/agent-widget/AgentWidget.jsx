import { Box, HStack, Spacer, Stack } from "@chakra-ui/react";
import { Text, Button } from "@chakra-ui/react";
import { WidgetBox } from "@ui-components/WidgetBox";
import DigitalClock from "@ui-components/DigitalClock";
import { GreyHorizontalDivider } from "@ui-components/Dividers";
import AgentChat from "@features/agent-chat/AgentChat";

export default function AgentWidget() {
    
    function getGreeting() {
        const hour = new Date().getHours();

        if (hour >= 4 && hour < 12) {
            return "Good morning"
        }

        if (hour >= 12 && hour < 17) {
            "Good afternoon"
        }

        if (hour >= 5 && hour < 24) {
            return "Good evening"
        }

        return "Hey there" // From 00:00-04:00 AM replace with generic greeting
    }

    const user = JSON.parse(localStorage.getItem('user'));

    return(
        <WidgetBox>
            <Stack direction="column" width="100%" align="start">
                <Text textStyle="darkBlueText">
                    {getGreeting()}, {user.first_name}
                </Text>
                <DigitalClock />
            </Stack>
            <GreyHorizontalDivider />

            <AgentChat />
        </WidgetBox>
    )
}