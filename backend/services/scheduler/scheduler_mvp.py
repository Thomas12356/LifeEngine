#V.1
from dataclasses import dataclass

#Config
#Weights
#How Aggressively to penalize low demand events in high value time slots.
WASTE_COST_WEIGHT = 0.5

@dataclass
class Event:
    name: str
    ideal_energy: float # (low = 0, medium = 0.5, high = 1)
    ideal_focus: float # (low = 0, medium = 0.5, high = 1)

@dataclass
class TimeSlot:
    hour: int # 0-23
    predicted_energy: float # (low = 0, medium = 0.5, high = 1)
    predicted_focus: float # (low = 0, medium = 0.5, high = 1)

def score_fit(event, timeslot):
    energy_fit = 1 - abs(event.ideal_energy - timeslot.predicted_energy)
    focus_fit = 1 - abs(event.ideal_focus - timeslot.predicted_focus)
    return (energy_fit + focus_fit) / 2

def time_slot_value(timeslot):
    return (timeslot.predicted_energy + timeslot.predicted_focus) / 2

def waste_cost(event, timeslot):
    event_demand_value = (event.ideal_energy + event.ideal_focus) / 2
    return time_slot_value(timeslot) * (1 - event_demand_value) * WASTE_COST_WEIGHT

def compute_net_score(event, timeslot):
    fit_score = score_fit(event, timeslot)
    cost = waste_cost(event, timeslot)
    #Prevent negative scores - avoid very low demand events that are being scheduled in high value slots producing negative net scores
    return max(0.0 ,fit_score - cost)

#Test
def test():
    event = Event("meeting", ideal_energy=0, ideal_focus=1)
    timeslot = TimeSlot(hour=10, predicted_energy=1, predicted_focus=0.3)
    
    fit_score = score_fit(event, timeslot)
    net_score = compute_net_score(event, timeslot)
    
    print(f"Fit Score: {fit_score}")
    print(f"Net Score: {net_score}")

test()