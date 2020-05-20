l = []
d = {}
for i in range(1,10):
    l.append("T10" + str(i))
    l.append("T20" + str(i))
    l.append("T30" + str(i))
    l.append("B10" + str(i))
    l.append("B20" + str(i))
    l.append("B30" + str(i))
    l.append("A10" + str(i))
    l.append("A20" + str(i))
    l.append("C10" + str(i))
    l.append("C20" + str(i))
    l.append("D10" + str(i))
    l.append("D20" + str(i))
    l.append("E10" + str(i))
    l.append("E20" + str(i))
    l.append("F10" + str(i))
    l.append("F20" + str(i))
    l.append("LP10" + str(i))
    l.append("LT10" + str(i))
    l.append("LT20" + str(i))
    l.append("LT30" + str(i))
    l.append("G10" + str(i))
    l.append("G20" + str(i))
    l.append("G30" + str(i))

for i in range(len(l)):
    d[i] = [l[i], (int(l[i][-3])-1)]

for i in d.values():
    if i[0][0] == "T":
        i.append("TAN")
        i.append(30.353619)
        i.append(76.368572)
    elif i[0][0] == "B":
        i.append("B")
        i.append(30.353082)
        i.append(76.371192)
    elif i[0][0] == "C":
        i.append("C")
        i.append(30.353545)
        i.append(76.371213)
    elif i[0][0] == "D":
        i.append("D")
        i.append(30.353290)
        i.append(76.371598)
    elif i[0][0] == "E":
        i.append("E")
        i.append(30.353461)
        i.append(76.372296)
    elif i[0][0] == "F":
        i.append("F")
        i.append(30.353930)
        i.append(76.372197)
    elif i[0][0] == "A":
        i.append("A")
        i.append(30.353748)
        i.append(76.370709)
    elif i[0][0] == "G":
        i.append("G")
        i.append(30.353601)
        i.append(76.369420)
    else:
        if i[0][1] == "T":
            i.append("LT")
            i.append(30.354435)
            i.append(76.369316)
        else:
            i.append("LP")
            i.append(30.354963)
            i.append(76.369262)

print(d)

f = open('locations.txt', "w")
f.write("[")
i = 0
for i in range(len(l)):
    f.write('''
        {{
            \"model\": \"timetable.location\",
            \"pk\": {},
            \"fields\": {{
                \"building\": \"{}\",
                \"room\": \"{}\",
                \"floor\": \"{}\",
                \"longitude\": \"{}\",
                \"latitude\": \"{}\"
                }}
        }},
'''.format(i, d[i][2], d[i][0], d[i][1], d[i][4], d[i][3]))
    i += 1

f.write("]")