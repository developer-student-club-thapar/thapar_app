import csv
import re
import uuid
from apiapp import fetch_data

d = {}
l = []
with open('drive.csv') as data:
    reader = csv.reader(data)
    i = 0
    for row in reader:
        filetype = re.sub('\s+', ' ', row[2]).strip()
        # print(filetype)
        if filetype == "Notes & Slides":
            filetype = "0669dfc3-8dce-4a80-bd06-755a468a4c7d"
        elif filetype == "Books":
            filetype = "ef8270b3-417c-48a0-9581-5c0d8dad552e"
        elif filetype == "Lab":
            filetype = "49be1a8e-ecb7-4faa-83d8-021c9b8ac473"
        elif filetype == "Books/Lab Material":
            filetype = "8b1a029f-67d2-4e7b-97c0-ec717cea9d3f"
        else:
            filetype = "4c42e02f-4da7-43b5-881b-66415f73534b"

        branch = re.sub('\s+', ' ', row[5]).lower()
        if branch == "biotech":
            branch = "BT"
        elif branch == "encece":
            branch = "ENC"
        elif branch == "cse":
            branch = "COE"
        elif branch == "mee":
            branch = "MEE"
        elif branch == "chem":
            branch = "CHE"
        elif branch == "electrical":
            branch = "ELE"
        elif branch == "civil":
            branch = "CE"
        elif branch == "electronics":
            branch = "ECE"
        else:
            branch = ""

        year = re.sub('\s+', ' ', row[3])
        if year == "third-year":
            year = "JR"
        elif year == "second-year":
            year = "SO"
        else:
            year = "FR"

        drive_id = re.sub('\s+', ' ', row[4]).strip()
        course_name = re.sub('\s+', ' ', row[1]).strip()
        course_name = re.sub(r"(\w)([A-Z])", r"\1 \2", course_name)
        l.append(drive_id)
        print(drive_id)
        folder_data = fetch_data(drive_id)
        for file_data in folder_data:
            file_name = file_data[0]
            file_id = file_data[1]
            webContentLink = file_data[2]
            webViewLink = file_data[3]
            print(file_name)
            d[i] = [re.sub('\s+', ' ', row[0]).strip(), re.sub('\s+', ' ', row[1]).strip(), filetype, re.sub('\s+', ' ', row[2]).strip(), year, drive_id, file_name, branch, file_id, webContentLink, webViewLink]
            print(i)
            i += 1
            

# print(l)
d.pop(0)
f = open("something.txt", "w")
for val in d.values():
    f.write('''
    {{
        \"model\": \"acad.file\",
        \"pk\": \"{}\",
        \"fields\": {{
            \"name\": \"{}\",
            \"type\": \"{}\",
            \"course\": [\"{}\", \"{}\"],
            \"branch\": [\"{}\", \"{}\"],
            \"file\": \"academic_File/{}\",
            \"file_id\": \"{}\",
            \"web_content_link\": \"{}\",
            \"web_view_link\": \"{}\"
            }}
    }},
    '''.format(uuid.uuid4(), val[6], val[2], val[1], val[0], val[7], val[4], val[6], val[8], val[9], val[10]))
    


