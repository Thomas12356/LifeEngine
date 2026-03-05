
import { HStack } from "@chakra-ui/react"
import DateSelectMenu from "@ui-components/calendar/sub-components/DateSelectMenu"
import ViewSelectMenu from "@ui-components/calendar/sub-components/ViewSelectMenu"

export default function CalendarMenu() {
    return (
        <HStack>
            <DateSelectMenu />
            <ViewSelectMenu />
        </HStack>
    )
}