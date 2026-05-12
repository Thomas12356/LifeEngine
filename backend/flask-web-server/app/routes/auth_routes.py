"""
Authentication blueprint
"""

from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from app import db
from app.services.auth_services import register_user, authenticate_user

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['POST'])
def login():
    """
    Validates user credentials
    """
    data = request.get_json()

    user = authenticate_user(data.get('email'), data.get('password'))
    
    if not user:
        return jsonify({"error": "Invalid email or password."}), 401
    
    access_token = create_access_token(identity=str(user.id))

    return jsonify({
        "message": "Login successful.",
        "access_token": access_token,
        "user": {
            "id": str(user.id),
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name
        }
    }), 200
