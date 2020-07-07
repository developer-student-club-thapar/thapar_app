import csv
import re
import os
from download import download_file
from apiapp import fetch_data

d = {}
l = []
with open('drive.csv') as data:
    reader = csv.reader(data)
    currentDirectory = os.getcwd()
    print(currentDirectory)
    for row in reader:
        drive_id = re.sub('\s+', ' ', row[4]).strip()
        folder_data = fetch_data(drive_id)
        for file_data in folder_data:
            file_name = file_data[0]
            file_id = file_data[1]
            download_file(file_id, os.path.join(currentDirectory + "/media/academic_File", file_name))
