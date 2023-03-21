from flask import Flask
from flask_pymongo import PyMongo
from config import MONGO_URI
app = Flask(__name__)
app.config["MONGO_URI"] = MONGO_URI
mongo = PyMongo(app)

PORT = 5000

@app.route('/')
def hello_world():
    return '<h1>Hello World</h1>'

if __name__ == '__main__':
    app.run(debug=True, port=PORT)