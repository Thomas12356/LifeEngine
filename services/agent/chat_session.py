sessions = {}

def get_session(session_id):
    if session_id not in sessions:
        sessions[session_id] = {
            "messages" : [],
            "pending_action" : None,
        }
    return sessions[session_id]

def add_message(session_id, role, content):
    session = get_session(session_id)

    session["messages"].append({
        "role" : role,
        "content" : content,
    })
    