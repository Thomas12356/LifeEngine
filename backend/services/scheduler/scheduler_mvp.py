from dataclasses import dataclass

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

#basic distance scoring function
def score_event(event, timeslot):
    energy_score = 1 - abs(event.ideal_energy - timeslot.predicted_energy)
    focus_score = 1 - abs(event.ideal_focus - timeslot.predicted_focus)
    return (energy_score + focus_score) / 2