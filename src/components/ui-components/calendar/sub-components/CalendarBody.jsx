
import { HStack, VStack, Text, Box } from "@chakra-ui/react"

const GridBackground = () => {
    return (
        <Box
            position="relative"
            h="1440px"
            flex="1"
            bgImage={`
                repeating-linear-gradient(
                to bottom,
                transparent,
                transparent 59px,
                #e2e8f0 60px
                ),
                repeating-linear-gradient(
                to right,
                transparent,
                transparent calc(100% / 7 - 1px),
                #e2e8f0 calc(100% / 7)
                )
            `}
        />
    )
}

const EventLayer = () => {

    const events = [
        { id: 1, title: "Event 1", start: "2024-06-01T09:00:00", end: "2024-06-01T10:00:00" },
        { id: 2, title: "Event 2", start: "2024-06-01T11:00:00", end: "2024-06-01T12:30:00" },
        { id: 3, title: "Event 3", start: "2024-06-01T17:00:00", end: "2024-06-01T19:00:00" },
    ]

    return (
        <Box position="absolute" top="0" left="0" w="100%" h="100%">
            {events.map(event => {
                const start = new Date(event.start)
                const end = new Date(event.end)
                const topPosition = (start.getHours() * 60 + start.getMinutes()) / 1440 * 100
                const height = (end - start) / (1000 * 60) / 1440 * 100

                return (
                    <Box
                        key={event.id}
                        position="absolute"
                        top={`${topPosition}%`}
                        left="0"
                        flex="1"
                        h={`${height}%`}
                        bg="blue.500"
                        color="white"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        {event.title}
                    </Box>
                )
            })}
         </Box>
    )
}

const TimeIndicator = () => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const topPosition = (hours * 60 + minutes) / 1440 * 100

    return (
        <Box
            position="absolute"
            top={`${topPosition}%`}
            left="0"
            w="100%"
            h="2px"
            bg="red.500"
        />
    )
}

export default function CalendarBody() {

    const hours = Array.from({ length: 24 }, (_, i) => i)

    return (
        <HStack align="start" spacing={0} w="100%">
            <VStack w="60px" h="1440px" position="relative">
                {hours.map(hour => (
                    <Text key={hour} top={`${hour * 60}px`} position="absolute">
                        {hour}:00
                    </Text>
                ))}
            </VStack>
            <Box flex="1" h="1440px" position="relative">
                <GridBackground />
                <EventLayer />
                <TimeIndicator />
            </Box>
        </HStack>
    )
}