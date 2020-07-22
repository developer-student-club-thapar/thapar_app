# importing pandas package
#import pandas as pd
from pathlib import Path
import mmap
basepath = "/Users/sanchitjain/Downloads/myherupa/pages/"
find_data="../pages/resource.html#resURL="
from bs4 import BeautifulSoup
import re

i=0
drive_row=[]
import csv
with open('tree_data.csv', 'w', newline='') as parse_file:
    writer = csv.writer(parse_file)
    pathlist = Path(basepath).glob('**/*.html')
    
    for path in pathlist:
        # because path is object not string
        i=i+1;
        path_in_str = str(path)
        print(path_in_str + " " + str(i))
        path_in_str_split = path_in_str.split('/')

        soup = BeautifulSoup(open(path_in_str), 'html.parser')
        page_details = soup.find_all("h2")
        #print(soup.find_all("h2"))
        page_names = soup.find_all("h1")
        # print(page_names)
        
        #drive_row.append(page_name.text)
        for page_details_h2 in page_details:
            drive_row.append(page_details_h2.text)
        for page_name in page_names:    
            drive_row.append(page_name.text)  

        for link in soup.find_all("a", href=lambda href: href and "resURL" in href):
            
            drive_id=link['href'].split("=")
            
            try:
                obj_data=[]
                obj_data.append(link.text)
                obj_data.append(path_in_str_split[7])
                obj_data.append(drive_id[1])
                j=0
                for path_in_str_split_data in path_in_str_split:
                    if(j>7):
                        obj_data.append(path_in_str_split_data)
                    j=j+1
                drive_row.append(obj_data)
                obj_data=[]

            except:
                print("It is an error ! I am kind a leaving")

        if(path_in_str_split[6]!='updates.html'):
            writer.writerow(drive_row)
            drive_row = []
        else:
            print("This is an Upadte File not Writing!")

