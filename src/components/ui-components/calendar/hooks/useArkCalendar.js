import { parseDate } from "@ark-ui/react";

export function useArkCalendar(selectedDate, setSelectedDate) {

    const arkValue = (selectedDate instanceof Date && !isNaN(selectedDate))
        ? [parseDate(selectedDate.toISOString().split('T')[0])]
        : [];
        
    const handleDateChange = (date) => {
        const newDate = date.value[0];
        if (newDate) {
            setSelectedDate(newDate.toDate('GMT'));
        }
    };

    return {
        arkValue,
        handleDateChange
    }
}
