from app import db
from app.models import User, UserPreferences, EventType
from app.services.utils.auth_util import verify_password, generate_new_hash
from app.services.event_parameter_services import create_event_parameters

import uuid, os
from datetime import datetime


def register_user(email, password, first_name, last_name, wake_up, bed_time):
    """
    Registers a new user with the given email, password, first name and last name.
    """

    if User.find_active_by_email(email):
        return None, "Account with this email already exists."
    
    password_hash, salt = generate_new_hash(password)

    # Create a new user instance and save to the database
    new_user = User(
        email=email,
        password_hash=password_hash,
        salt=salt,
        first_name=first_name,
        last_name=last_name
    )

    db.session.add(new_user) # Add the new user to the database session and commit
    db.session.commit()

    new_user_preferences = UserPreferences( # Build preferences
        user_id = new_user.id,
        wakeup_time = wake_up,
        bed_time = bed_time,
    )
    
    db.session.add(new_user_preferences) # Commit new preferences
    db.session.commit()

    defaults = { # Build default event type parameters
        "ideal_energy": os.environ.get("DEFAULT_IDEAL_ENERGY"),
        "burnout_rate": os.environ.get("DEFAULT_BURNOUT_RATE"),
        "priority": os.environ.get("DEFAULT_PRIORITY"),
    }

    result = create_event_parameters(defaults) # Create default parameters

    parameters_uuid = uuid.UUID(result["event_parameters_id"])

    default = EventType(
            user_id = new_user.id,
            event_parameter_id = parameters_uuid,
            name = "Default",
            created_at = datetime.now(),
            colour = os.environ.get("DEFAULT_COLOUR"),
            availability_start = wake_up,
            availability_end = bed_time,
            preference_start = wake_up,
            preference_end = bed_time

        )
    
    db.session.add(default)
    db.session.commit()

    return new_user, None


def authenticate_user(email, password):
    """
    Authenticates a user by their email and password.
    """
    user = User.find_active_by_email(email)

    if user and verify_password(password, user.salt, user.password_hash):
        return user
    
    return None
