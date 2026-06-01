from flask_jwt_extended import jwt_required, get_jwt_identity

from app.services.event_services import reschedule_event

def auto_reschedule_event(event_id_str):
    """
    Generate a proposed schedule.
    Do not save changes here.
    """
    old_schedule = [{"name" : "Old", "start_time" : "2026-06-01T19:00:00", "end_time" : "2026-06-01T20:00:00"}]
    # TODO: replace this with your real scheduling algorithm.
    new_schedule = [{"name" : "New", "start_time" : "2026-06-01T19:00:00", "end_time" : "2026-06-01T20:00:00"}]

    return {
        "ok": True,
        "old_schedule": old_schedule,
        "new_schedule": new_schedule,
        # "changes": [
        #     {
        #         "event_id": event_id_str,
        #     }
        # ],
    }

def apply_auto_rechedule(user_id_str: str, pending_reschedule: dict):
    new_schedule = pending_reschedule.get("new_schedule", [])

    if not new_schedule:
        return {
            "ok": False,
            "error": "No proposed schedule to apply.",
        }
    
    updated_events = []

    for event in new_schedule:
        event_id = event.get("id")
        new_start = event.get("start_time")
        new_end = event.get("end_time")

        if not event_id or not new_start or not new_end:
            return {
                "ok": False,
                "error": "Invalid event in proposed schedule.",
            }
        
        result = reschedule_event(
            user_id_str=user_id_str,
            event_id_str=str(event_id),
            new_start=new_start,
            new_end=new_end,
        )

        if not result.get("success"):
            return result

        updated_events.append({
            "event_id": event_id,
            "result": result,
        })

    return {
        "success": True,
        "message": "Auto-reschedule applied.",
        "updated_events": updated_events,
        "status_code": 200,
    }