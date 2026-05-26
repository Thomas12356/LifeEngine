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

export default function Home() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <Box>
            <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
                <VStack width={"60%"}  px={5}>
                    <ResourceSelectorHeading />
                    <NextEvent />
                </VStack>
                <VStack width={"40%"}  px={5}>
                </VStack>
            </Stack>
        </Box>
    )
}