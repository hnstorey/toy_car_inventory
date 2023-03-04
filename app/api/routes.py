from distutils.archive_util import make_archive
from flask import Blueprint, request, jsonify, render_template
from helpers import token_required
from models import db, User, Toy_car, car_schema, cars_schema

api = Blueprint('api', __name__, url_prefix='/api')

@api.route('/my_cars', methods=['POST'])
@token_required
def create_car(current_user_token):
    make = request.json['make']
    model = request.json['model']
    color = request.json['color']
    user_token = current_user_token.token

    print(f'BIG TESTER: {current_user_token}')

    toy_car = Toy_car(make, model, color, user_token = user_token)

    db.session.add(toy_car)
    db.session.commit()

    response = car_schema.dump(toy_car)
    return jsonify(response)

@api.route('/my_cars', methods=['GET'])
@token_required
def get_cars(current_user_token):
    a_user = current_user_token.token
    cars = Toy_car.query.filter_by(user_token = a_user).all()
    response = cars_schema.dump(cars)
    return jsonify(response)

@api.route('/my_cars/<id>', methods=['GET'])
@token_required
def get_single_car(current_user_token, id):
    car = Toy_car.query.get(id)
    response = car_schema.dump(car)
    return jsonify(response)

@api.route('/my_cars/<id>', methods = ['POST', 'PUT'])
@token_required
def update_car(current_user_token, id):
    car = Toy_car.query.get(id)
    car.make = request.json['make']
    car.model = request.json['model']
    car.color = request.json['color']
    car.user_token = current_user_token.token

    db.session.commit()
    response = car_schema.dump(car)
    return jsonify(response)

@api.route('/my_cars/<id>', methods = ['DELETE'])
@token_required
def delete_car(current_user_token, id):
    car = Toy_car.query.get(id)
    db.session.delete(car)
    db.session.commit()
    response = car_schema.dump(car)
    return jsonify(response)
