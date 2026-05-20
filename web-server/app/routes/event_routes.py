from flask import Blueprint, request, jsonify

event_blueprint = Blueprint('event',__name__)

REQUIRED_EVENT_FIELDS = ['user_id', 'name', 'start_time', 'end_time']

@event_blueprint.route('/addevent', methods=['POST'])
def add_event():
    data = request.get_json()

    # check required data has been given.
    for field in REQUIRED_EVENT_FIELDS:
        if field not in data or not data[field]:
            return jsonify({"error": f"Missing required field: {field}"}), 400
        
    return