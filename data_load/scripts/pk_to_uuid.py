import uuid
f1 = open("../hashx/acad/fixtures/acad.json", "r")
f2 = open("new_file.txt", "w")

lines = f1.readlines()

j = 1
i = 0
while i<1773:
    search = "\"pk\": " + str(j) + ","
    if lines[i].strip() == search:
        f2.write("\t\"pk\": \"" + str(uuid.uuid4()) + "\",\n")
        j += 1
        print("Found line")
    else:
        f2.write(lines[i])
    
    i += 1