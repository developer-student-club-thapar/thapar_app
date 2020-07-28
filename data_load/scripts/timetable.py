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
batch_d = {}


def get_all_batches(year, row_number, leng, start):
    """
    this function will be used to scrape all the batches
    from the file.
    """
    global j
    global batch_d
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
            batch_id = uuid.uuid4()
            batch_d[j] = [branch, num, year, batch_id]
            j += 1


def batch_fixtures(batch_d):

    f = open("batches.txt", "w+")
    for val in batch_d.values():
        f.write('''
        {{
            \"model\": \"acad.batch\",
            \"pk\": \"{}\",
            \"fields\": {{
                \"num\": \"{}\",
                \"branch\": [\"{}\", \"{}\"]
                }}
        }},
        '''.format(val[3], val[1], val[0], val[2]))


def makeBoards(d):

    f = open("timetableboard.txt", "w+")
    for val in d.values():
        f.write('''
        {{
            \"model\": \"timetable.timetableboard\",
            \"pk\": \"{}\",
            \"fields\": {{
                \"name\": \"{}{}\",
                \"batch\": \"{}\",
                \"start_repetition\": \"2020-07-20T06:33:34Z\",
                \"end_repetition\": \"2020-12-20T06:33:34Z\"
                }}
        }},
        '''.format(uuid.uuid4(), val[0], val[1], val[3]))


get_all_batches("SO", 3, 97, 3)
get_all_batches("SO", 186, 95, 3)
get_all_batches("JR", 362, 48, 2)
get_all_batches("JR", 514, 101, 3)
get_all_batches("SR", 666, 82, 2)
get_all_batches("SR", 818, 50, 2)

makeBoards(batch_d)

batch_fixtures(batch_d)


# batch = "COE69"
# num = int(''.join(filter(str.isdigit, batch)))
# branch = str(''.join(filter(str.isalpha, batch)))
# print(branch, num)