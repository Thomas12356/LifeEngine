
"""
    The schedule class represents a candidate schedule for the genetic algorithm.
    It contain a list of events and a list of timeslots, as well as fitness scores.
    Methods include helper functions for inserting events, checking schedule availability & logging

    In the future this class could be re-used for other schedule based applications throughout the system
    In that case we would remove some fields and methods, and create a child class called CandidateSchedule specifically for the GA

"""

from dataclasses import dataclass
from models import Event, TimeSlot

# NOTE : Abstract to global constants file
SCHEDULE_RESOLUTION = 24 # 24 timeslots per day

class Schedule:
    def __init__(self, id, events, energy_landscape):
        self.id = id # Unique identifier for the schedule
        self.events = events # Container for events to be scheduled
        self.timeslots = [None] * SCHEDULE_RESOLUTION # Initialize empty timeslots for the schedule
        self.match_fitness = 0.0 # Fitness score based on the match between ideal and predicted energy levels
        self.simulation_score = 0.0 # Fitness score based on the results of the fatigue simulation
        self.total_fitness = 0.0 # Combined fitness score (could be a weighted sum of match_fitness and simulation_score)
        self.unscheduled_events = 0 # Track the number of unscheduled events, value is used to penalise schedules that fail to contain all events
        self.energy_landscape = energy_landscape

    # Given an event and start time, return True if the event can be scheduled at that time, False otherwise
    def check_availability(self, event, start_time):
        if start_time + event.duration >= 24:
            return False # Event cannot be scheduled as it exceeds the day boundary
        else:
            for hour in range(event.duration): # Iterate over the duration of the event
                if self.timeslots[start_time + hour] is not None:
                    return False # Event cannot be scheduled as it overlaps with another event
            return True

    # Given an event and start time, attempt to insert the event into the schedule at the specified time
    # Return True if the event was successfully inserted, False otherwise
    def insert_event(self, event, start_time):
        if self.check_availability(event, start_time):
            for hour in range(event.duration):
                predicted_energy, _ = self.energy_landscape[start_time + hour]
                self.timeslots[start_time + hour] = TimeSlot(hour=start_time + hour,event=event, predicted_energy=predicted_energy)
            return True
        else:
            return False
        
    # Utility function to visualise the schedule in a readable format
    def visualise(self):
        print(f"""
              Candidate Schedule {self.id}
              (Match fitness: {self.match_fitness})
              (Simulation score: {self.simulation_score})
              (Total Fitness: {self.total_fitness}):
        """)
        input("Press ENTER to view schedule : ")
        i = 0
        for timeslot in self.timeslots:
            if timeslot is not None:
                print(f"""
                      Hour {timeslot.hour}: {timeslot.event.name},
                      Predicted Energy: {timeslot.predicted_energy},
                      Ideal Energy: {timeslot.event.EventType.ideal_energy},
                      Effective Energy: {timeslot.effective_energy},
                """)
            else:
                print(f"Hour {i}: Free")
            i += 1
        print("\n")

    # Utility function to reset fitness scores
    def reset_scores(self):
        self.match_fitness = 0.0
        self.simulation_score = 0.0
        self.total_fitness = 0.0

    def repair(self):
        
        # 3 CASES WHERE REPAIR IS NEEDED
        #   - Duplicate events
        #       - Collect all scheduled events and check for duplicates
        #       - Remove instance with lower effective energy
        #   - Missing events
        #       - Build a list of events present in the schedule
        #       - Compare against self.events (master list, must be clean)
        #       - Attempt to greedy insert each missing event
        #   - Fragmented events
        #       - Scan list of scheduled events
        #       - Check each event to see if it occupies duration number of slots

        # STEP 1. Check for fragmented events
        unscheduled_events = []
        i = 0 # Intialise pointer
        while i < len(self.timeslots):
            slot = self.timeslots[i] # Current timeslot being viewed

            if slot is None: # Check if an event has been scheduled in current timeslot
                i += 1
                continue # If not increment pointer and move jump back to top of loop

            event = slot.event # Event scheduled in current timeslot
            duration = event.duration
            is_fragmented = False # Initialise flag to exit loop

            # Check temporal integrity (event start at the correct time)
            if event.start_time is not None: # Check if event has a fixed start time
                if event.start_time != i: # If there is a discrepancy between start times, event has been fragemented
                    is_fragmented = True

            # NOTE : We can instantly tell if a fixed event has been fragemented by comparing correct and actual start times
            # Since the loop jumps when an event has been checked we will always be looking at the start of an event, even if it spans multiple timeslots

            # Check structural integrity (full duration is met)
            if not is_fragmented:
                for d in range(duration): # Iterate over event duration
                    if i + d >= len(self.timeslots): # Check if event has been cutoff by end-of-day
                        is_fragmented == True
                        break
                    target = self.timeslots[i + d] # Set target slot to where the next block of the event should be scheduled
                    if target == None or target.event.event_id != event.event_id: # Check if timeslot if empty or contains a different event
                        is_fragmented = True
                        break
            
            # Resolve by removing fragements and pushing event into unscheduled_events
            if is_fragmented: # Event has been fragmented
                current_id = event.event_id
                while i < len(self.timeslots): # Iterate over each subsequent time slot 
                    if self.timeslots[i] != None and (self.timeslots[i].event.event_id == current_id): # Check if timeslot contains a fragment
                        self.timeslots[i] = None # Clear the timeslot
                        i += 1 # Increment pointer
                if event not in unscheduled_events:
                    unscheduled_events.append(event) # Push event to unscheduled events to be re inserted later
            else: # Event integrity has been preserved
                i += duration # Jump to end of event


            






        
        
        
                        

        
            


        


        

        
            
                
