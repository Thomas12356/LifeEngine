/**
 * Home Page Component
 *
 * Renders the content of the home page
 *
 * @component
 * @returns {JSX.Element} The Home page component
 *
 * Last updated: 21/02/2026
 */

import { Box } from "@chakra-ui/react";

import ResourceSelect from "@ui-components/ResourceSelect";

export default function Home() {
    return (
        <Box>
        <h1>Hello World</h1>
        <ResourceSelect resource={"Focus"}/>
        </Box>
    )
}