#V.1
from dataclasses import dataclass

#Config
#Weights
#How Aggressively to penalize low demand events in high value time slots.
WASTE_COST_WEIGHT = 0.5


@dataclass
class EventType:
    name: str
    ideal_energy: float
    ideal_focus: float
    energy_weight: float
    focus_weight: float

@dataclass
class Event:
    name: str
    EventType: EventType

@dataclass
class TimeSlot:
    hour: int # 0-23
    predicted_energy: float # (low = 0, medium = 0.5, high = 1)
    predicted_focus: float # (low = 0, medium = 0.5, high = 1)

def score_fit(event, timeslot):
    def calculate_resource_fit(ideal, predicted):
        gap = ideal - predicted

        if predicted > ideal:
            gap *= WASTE_COST_WEIGHT

        resource_fit = 1 - gap ** 2

        return resource_fit

    energy_fit = calculate_resource_fit(event.EventType.ideal_energy, timeslot.predicted_energy)

    focus_fit = calculate_resource_fit( event.EventType.ideal_focus, timeslot.predicted_focus)

    total_weight = (event.EventType.energy_weight + event.EventType.focus_weight)

    return (energy_fit * event.EventType.energy_weight + focus_fit * event.EventType.focus_weight) / total_weight

# def time_slot_value(timeslot):
#     return (timeslot.predicted_energy + timeslot.predicted_focus) / 2

# def waste_cost(event, timeslot):
#     event_demand_value = (event.EventType.ideal_energy + event.EventType.ideal_focus) / 2
#     if event_demand_value < time_slot_value(timeslot):
#         gap = time_slot_value(timeslot) - event_demand_value
#         #quadratic penalty
#         return (gap ** 2) * WASTE_COST_WEIGHT
#     else:
#         return 0.0

def compute_net_score(event, timeslot):
    fit_score = score_fit(event, timeslot)
    cost = waste_cost(event, timeslot)
    #Prevent negative scores - avoid very low demand events that are being scheduled in high value slots producing negative net scores
    return max(0.0 ,fit_score - cost)

#Test
def test():
    event_type = EventType("Work", ideal_energy=0, ideal_focus=0, energy_weight=1, focus_weight=1)
    event = Event("meeting", EventType=event_type)
    timeslot = TimeSlot(hour=10, predicted_energy=0.5, predicted_focus=0.5)
    
    fit_score = score_fit(event, timeslot)
    net_score = compute_net_score(event, timeslot)
    
    print(f"Fit Score: {fit_score}")
    print(f"Net Score: {net_score}")

test()