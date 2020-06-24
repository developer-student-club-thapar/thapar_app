import requests
import pymongo
import json
#import pandas as pd

folder_id=["1aNmQOgMIseQ1XspfKAY6xlFLAGk3bKa6","157TDvg3CDEtKWzGeBEGXVoj8-vTzMvsC"]


def fetch_data(resURL):
    url = "https://www.googleapis.com/drive/v3/files?q=%27" + resURL +"%27+in+parents&key=AIzaSyCLsjQI8bnfyuh9-FKy-eH87Uq_wUG0H0Y&fields=*"
    print(url)
    response = requests.request("GET", url , headers={}, data ={})
    json_data = json.loads(response.text.encode('utf8'))
    print(json_data)

for folder in folder_id:
    print(fetch_data(folder))




