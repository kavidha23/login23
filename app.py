# coding: utf-8

from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/kavidha')
db = client['kavidha']

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello World'

@app.route('/login', methods=['POST', 'GET'])
def data():
    
    if request.method == 'POST':
        body = request.json
        userName = body['userName']
        password = body['password']
        
    
        db['uusers'].insert_one({
            "userName": userName,
            "password": password,
            
        })
        return jsonify({
            'status': '200. Data is posted to MongoDB',
            'userName': userName,
            'password': password
            
        })
    
 
    if request.method == 'GET':
        allData = db['uusers'].find()
        dataJson = []
        for data in allData:
            id = data['_id']
            userName = data['userName']
            password = data['password']
           
            
            dataDict = {
                'id': str(id),
                'userName': userName,
                'password': password,
                
            }
            
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)
if __name__ == '__main__':
    app.run()




