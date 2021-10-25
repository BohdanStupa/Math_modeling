from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"



@app.route("/initial_data", methods=['GET'])
def send_initial_data():
    print("send_initial_data")
    people = [{'name': 'Alice', 'birth-year': 1986},
          {'name': 'Bob', 'birth-year': 1985}]
    return jsonify(people)


@app.route("/calculate", methods=['POST'])
def handle_calculate():
    print("handle_calculate", request.data)

    return jsonify(res="calculated successfull")


if __name__ == "__name__":
    app.run(debug=True)