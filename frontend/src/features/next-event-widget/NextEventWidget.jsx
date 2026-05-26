import { WidgetBox } from "@ui-components/WidgetBox";

/**
 * Next Event Loayout
 *
 * Displays the next event in the user's schedule and options to cancel and reschedule.
 *
 * @component
 * @returns {JSX.Element} NextEvent Layout
 *
 * Last updated: 16/04/2026 by te215@kent.ac.uk
 * 
 * TODO:
 * - Theming and Styling
 * - Data Passing
 */

/* ---------- Imports Chakra UI ----------*/
import { Box, HStack, Spacer, Stack } from "@chakra-ui/react";
import { Text, Button } from "@chakra-ui/react";

export default function NextEvent() {
    
    return(
        <WidgetBox width={"100%"}>
        <HStack height={"100%"} justifyContent={"space-between"}>
            <Stack>
                <Stack alignItems={"start"} gap={0}>
                    <Text textStyle="blueText">Next Up</Text>
                    <Text textStyle="headingSolid">Code LifeEngine</Text>
                </Stack>
                <Text>10:00 AM - 11:00 AM</Text>
            </Stack>

            <Stack gap={8} alignItems={"end"}>
                <Text>Starts in -- Minutes</Text>   
                <HStack >
                    <Button bg="warningYellow">Reschedule</Button>
                    <Button bg="errorRed">Cancel</Button>
                </HStack>
            </Stack>
        </HStack>
        </WidgetBox>
    )
}