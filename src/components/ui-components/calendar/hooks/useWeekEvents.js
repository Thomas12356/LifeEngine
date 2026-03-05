
import { useState, useEffect } from "react"
import { startOfWeek, endOfWeek } from "date-fns"

export function useWeekEvents(allEvents, selectedDate) {

    const [weekEvents, setWeekEvents] = useState([])

    // Update state with filtered events
    useEffect(() => {
        // Calculate start and end of week based on selectedDate
        const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 }) // Monday as first day of the week
        const weekEnd = endOfWeek(selectedDate, { weekStartsOn: 1 }) // Sunday as last day of the week

        // Filter events that fall within the week
        const weekEvents = allEvents.filter(event => {
            const eventDate = new Date(event.start)
            return eventDate >= weekStart && eventDate <= weekEnd
        })

        setWeekEvents(weekEvents)
    }, [allEvents, selectedDate]);
    
    return weekEvents
}