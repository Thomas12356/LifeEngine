/**
 * Home Page Component
 *
 * Renders the content of the home page
 *
 * @component
 * @returns {JSX.Element} The Home page component
 *
 * Last updated: 18/04/2026
 */

/* ---------- Imports Chakra UI ----------*/
import { Box, HStack, Spacer, Stack, VStack } from "@chakra-ui/react";

/* ---------- Imports Custom Layout Components ----------*/
import ResourceSelectorHeading from "@features/resource-selector-heading/ResourceSelectorHeading";
import NextEvent from "@features/next-event-widget/NextEventWidget";
import AgentWidget from "@features/agent-widget/AgentWidget";
import ScheduleWidget from "@features/schedule-widget/ScheduleWidget";

export default function Home() {
    
    return (
        <Box
            width="100%"
            flex="1"
            minH={0}
            display="flex"
            flexDirection="column"
            px={3}
            py={2}
            pb="10"
        >
            <Stack
                direction={{ base: "column", lg: "row" }}
                width="100%"
                height="100%"
                justifyContent="space-between"
                alignItems="stretch"
                gap={6}
            >
                {/* Left Column */}
                <VStack
                    width={{ base: "100%", lg: "50%" }}
                    display={{ base: "none", lg: "flex" }}
                    align="stretch"
                    gap={5}
                    height="100%"
                >
                    <AgentWidget />
                    
                </VStack>

                {/* Right Column */}
                <VStack
                    width={{ base: "100%", lg: "50%" }}
                    align="stretch"
                    gap={5}
                >
                    {/* Add future widgets/components here */}
                    <NextEvent />
                    <ScheduleWidget />
                    
                </VStack>
            </Stack>
        </Box>
    )
}