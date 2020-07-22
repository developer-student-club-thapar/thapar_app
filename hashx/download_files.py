import csv
import re
import os
from download import download_file
from apiapp import fetch_data

def download(wanted_code, wanted_year):
    with open('drive.csv') as data:
        reader = csv.reader(data)
        currentDirectory = os.getcwd()
        print(currentDirectory)
        for row in reader:
            code = re.sub('\s+', ' ', row[5]).strip().lower()
            # print(code)
            year = re.sub('\s+', ' ', row[3]).strip().lower()

            if (wanted_code == code and wanted_year == year):
                drive_id = re.sub('\s+', ' ', row[4]).strip()
                folder_data = fetch_data(drive_id)
                for file_data in folder_data:
                    file_name = file_data[0]
                    file_id = file_data[1]
                    download_file(file_id, os.path.join(currentDirectory + "/media/academic_File", file_name))

def download_all():
    # Drive.csv contains all data including drive_ids
    with open('drive.csv') as data:
        reader = csv.reader(data)
        currentDirectory = os.getcwd()
        print(currentDirectory)
        # iterates through the rows
        for row in reader:
            drive_id = re.sub('\s+', ' ', row[4]).strip()
            folder_data = fetch_data(drive_id)
            for file_data in folder_data:
                file_name = file_data[0]
                file_id = file_data[1]
                # calls download function from other file
                download_file(file_id, os.path.join(currentDirectory + "/media/academic_File", file_name))

if __name__ == "__main__":
    while input("Do you wish to add more files?(y/n): ").lower() == "y":
        if input("Do you want to download all files(y/n): ").lower() == "y":
            download_all()
        else:
            code = input("Enter branch code: ")
            year = input("Enter branch year: ")
            download(code, year)
