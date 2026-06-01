"""

    Scheduler task : Auto reschedule single event on the same day

    Notes : 
        - Reject immedietly if no time left in the day to fit in event
        - Take in DTOS, they are built in the service file
"""

from app.services import event_services, event_type_services, event_parameter_services, user_services
from app.models import Event, EventType, EventParameter, UserPreferences
from ..dto.input_dto import dbEventInput, dbEventTypeInput, dbUserPreferenceInput
from ..dto.mapper import map_event

def auto_reschedule(
        event_to_reschedule : tuple,
        day_array : list[tuple],
        user_preferences : dbUserPreferenceInput
    ):
    
    events_to_schedule = [] # Initalise array to feed into GA
    for (event_dto, event_type_dto) in day_array: # Extract DTOs from array and map to GA Event model
        events_to_schedule.append(map_event(event_dto=event_dto, event_type_dto=event_type_dto), user_preferences)

    (event_dto, event_type_dto) = event_to_reschedule
    reschedule_id = event_dto.id # Record ID so we can fetch from GA result and add to array
    events_to_schedule.append(map_event(event_dto=event_dto, event_type_dto=event_type_dto), user_preferences)



    