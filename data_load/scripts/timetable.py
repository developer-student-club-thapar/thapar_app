from xlrd import open_workbook
import csv
import re
import uuid

# Script to read the timetable file and create fixtures accordingly


def read_file():
    """
    this function is supposed to read the csv file 
    of the timetable and store the data suitably
    """

    return None


j = 0
d = {}


def get_all_batches(year, row_number, leng, start):
    """
    this function will be used to scrape all the batches
    from the file.
    """
    global j
    global d
    with open('timetable.csv') as data:
        reader = list(csv.reader(data))
        current_row = reader[row_number]
        print(current_row)
        i = start
        while i<leng:
            batch = current_row[i].replace(" ", "")
            print(batch)
            num = int(''.join(filter(str.isdigit, batch)))
            branch = str(''.join(filter(str.isalpha, batch)))
            # print(branch, num)
            i += 2
            d[j] = [branch, num, year]
            j += 1

    print_fixtures(d)


def print_fixtures(d):
    f = open("batches.txt", "w+")
    for val in d.values():
        f.write('''
        {{
            \"model\": \"acad.batch\",
            \"pk\": \"{}\",
            \"fields\": {{
                \"num\": \"{}\",
                \"branch\": [\"{}\", \"{}\"]
                }}
        }},
        '''.format(uuid.uuid4(), val[1], val[0], val[2]))


get_all_batches("Sophomore", 3, 97, 3)
get_all_batches("Sophomore", 186, 95, 3)
get_all_batches("Junior Year", 362, 48, 2)
get_all_batches("Junior Year", 514, 101, 3)
get_all_batches("Senior Year", 666, 82, 2)
get_all_batches("Senior Year", 818, 50, 2)


# batch = "COE69"
# num = int(''.join(filter(str.isdigit, batch)))
# branch = str(''.join(filter(str.isalpha, batch)))
# print(branch, num)