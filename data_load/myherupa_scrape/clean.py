import fileinput



with open("drive.csv", "r") as f:
    lines = f.readlines()
i = 0
while lines:
    if i>2016:



with open("drive.csv", "w") as f:
    for line in lines:
        if line.strip("\n") != "Tutorial Sheets,Notes & Slides,Notes & Slides,Tutorial Solutions 8,Notes & Slides,Tutorial Solutions,Notes,Tutorials,Tutorial Solutions,Notes,Previous Papers,Notes & Slides,Notes & Slides,Notes,Tutorial Sheets,Books,Notes,Tutorials,\"":
            f.write(line)
        
        

with open("drive.csv", "r") as f:
    lines = f.readlines()
lines = [',' + line if (line[0] in ['P', 'B', 'N', 'T']) else line for line in lines]    
with open("drive.csv", "w") as f:
    f.writelines(lines)

f = open('drive.csv')
text = f.read()
f.close()
# open the file again for writing
f = open('drive.csv', 'w')
f.write("Code, Type, Year, ID, Branch,,,,,,\"")
# write the original contents
f.write(text)
f.close()