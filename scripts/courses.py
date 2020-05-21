import csv
from collections import defaultdict
f = open("courses.txt", "w")
d = {}
with open('myherupa_scrape.csv') as data:
    reader = csv.reader(data)
    i = 0
    for row in reader:
        d[i] = [row[0], row[1]]
        i += 1

d.pop(0)
i = 56
for val in d.values():
    f.write('''
    {{
        \"model\": \"acad.course\",
        \"pk\": {},
        \"fields\": {{
            \"name\": \"{}\",
            \"code\": \"{}\"
            }}
    }},
        '''.format(i, val[1], val[0]))
    i += 1
f.write("]")