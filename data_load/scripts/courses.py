import csv
import re
import uuid
from collections import defaultdict
f = open("courses.txt", "w")
d = {}
with open('../myherupa_scrape/drive.csv') as data:
    reader = csv.reader(data)
    i = 0
    for row in reader:
        d[i] = [re.sub('\s+', ' ', row[0]).strip(), re.sub('\s+', ' ', row[1]).strip()]
        i += 1

d.pop(0)
l = []
for val in d.values():
    if (val[0], val[1]) not in l:
        f.write('''
        {{
            \"model\": \"acad.course\",
            \"pk\": \"{}\",
            \"fields\": {{
                \"name\": \"{}\",
                \"code\": \"{}\"
                }}
        }},
            '''.format(uuid.uuid4(), val[1], val[0]))
    l.append(tuple((val[0], val[1])))
f.write("]")
