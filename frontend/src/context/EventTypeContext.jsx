import { createContext, useState, useEffect, useContext } from "react";
import { fetchEventTypes } from "@/utils/eventServices";

// Initialise event type context
const EventTypeContext = createContext(null);

export function EventTypeProvider({ children }) {
    // Initialise state values
    const [eventTypes, setEventTypes] = useState([])

    // Fetch logged-in user from local storage
    // Replace with fetch from AuthContext
    const user = JSON.parse(localStorage.getItem("user"))

    async function refreshEventTypes() {
        if (!user?.id) return

        try {
            const eventTypes = await fetchEventTypes(user.id)
            setEventTypes(eventTypes)
        } catch (err) {
            console.log("Failed to fetch event types", err)
        }
    }

    // Refresh event types on mount
    useEffect(() => {
        refreshEventTypes()
    }, [])

    // DEBUG - REMOVE LATER
    useEffect(() => {
        console.log(eventTypes)
    }, [eventTypes])

    const value = {
        eventTypes
    }

    return (
        <EventTypeContext.Provider value={value}>
            {children}
        </EventTypeContext.Provider>
    )
}

export const useEventTypes = () => useContext(EventTypeContext);