import ResourceSelect from "@ui-components/ResourceSelect"
import { HStack } from "@chakra-ui/react";

export default function ResourceSelectorHeading() {
    return(
        <HStack>
            <ResourceSelect resource="Focus" />
            <ResourceSelect resource="Energy" />
        </HStack>
    )
}