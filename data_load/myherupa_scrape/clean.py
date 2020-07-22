import csv
import re


csv_in = open('drive_copy.csv', 'r')


lines = []
for row in csv.reader(csv_in):
    branch = re.sub('\s+', ' ', row[1])
    branch = re.sub(r"(\w)([A-Z])", r"\1 \2", branch)
    branch = branch.replace("&", " and ")
    print(branch)

    row[1] = branch
    lines.append(row)

with open('drive_copy.csv', 'w') as data:
    writer = csv.writer(data)
    print("opened")
    writer.writerows(lines)