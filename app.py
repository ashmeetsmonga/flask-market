from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo
from config import MONGO_URI
app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = MONGO_URI
mongo = PyMongo(app)

PORT = 5000

@app.route('/')
@app.route('/home')
def home_page():
    return 'Home'

@app.route('/market')
def market():
    items = [
        {'id': 1, 'name': 'Phone', 'barcode': '893212299897', 'price': 500},
        {'id': 2, 'name': 'Laptop', 'barcode': '123985473165', 'price': 900},
        {'id': 3, 'name': 'Keyboard', 'barcode': '231985128446', 'price': 150}
    ]

    return jsonify(items)

if __name__ == '__main__':
    app.run(debug=True, port=PORT)