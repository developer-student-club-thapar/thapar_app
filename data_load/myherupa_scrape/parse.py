from pathlib import Path
basepath = "/Users/sanchitjain/Downloads/myherupa/pages/"
find_data="../pages/resource.html#resURL="
from bs4 import BeautifulSoup
import re


i=0
drive_row=[]
import csv
with open('drive.csv', 'w', newline='') as parse_file:
    writer = csv.writer(parse_file)
    pathlist = Path(basepath).glob('**/*.html')
    
    for path in pathlist:
        if path == basepath + "updates.html":

        # because path is object not string
        i=i+1;
        path_in_str = str(path)
        # print(path_in_str + " " + str(i))
        path_in_str_split = path_in_str.split('/')

        soup = BeautifulSoup(open(path_in_str), 'html.parser')
        page_details = soup.find_all("h2")
        # print(page_details)
        page_name = soup.find_all("h1")
        # print(page_name)
        for link in soup.find_all("a", href=lambda href: href and "resURL" in href):
            drive_id=link['href'].split("=")
            try:
                #drive_row.append(page_name.text)
                for page_details_h2 in page_details:
                    drive_row.append(page_details_h2.text)
                    # print(page_details_h2)

                for page_name_h1 in page_name:
                    drive_row.append(page_name_h1.text)
                    # print(re.sub('\s+', ' ', page_name_h1.text))
                
                drive_row.append(link.text)
                drive_row.append(path_in_str_split[7])
                drive_row.append(drive_id[1])
                j=0
                for path_in_str_split_data in path_in_str_split:
                    if(j>7):
                        drive_row.append(path_in_str_split_data)
                    
                    j=j+1
                

                if(path_in_str_split[6]!='updates.html'):
                    writer.writerow(drive_row)
                    #print(drive_row)
                else:
                    print("this is an Upadte File not Writing!")
                drive_row = []

            except:
                print("It is an error Dude ! I am kind a leaving")



