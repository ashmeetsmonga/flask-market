from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from config import MONGO_URI
app = Flask(__name__)
app.config["MONGO_URI"] = MONGO_URI
mongo = PyMongo(app)

PORT = 5000

@app.route('/')
@app.route('/home')
def home_page():
    return 'Home'

if __name__ == '__main__':
    app.run(debug=True, port=PORT)