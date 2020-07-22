# importing pandas package
#import pandas as pd
from pathlib import Path
import mmap
basepath = "/Users/sanchitjain/Downloads/myherupa/pages/"
find_data="../pages/resource.html#resURL="
i=1

import csv
with open('dump.csv', 'w', newline='') as dump:
    writer = csv.writer(dump)
    pathlist = Path(basepath).glob('**/*.html')

    for path in pathlist:
        # because path is object not string
        path_in_str = str(path)
        print(path_in_str)
    
        with open (path_in_str, 'rt') as file:
            for line in file:
                print(line)
                print(line.find(r'"<a href="../../../resource.html#resURL='))

                

    #   with open(path_in_str, 'rb', 0) as file, \
    #       mmap.mmap(file.fileno(), 0, access=mmap.ACCESS_READ) as s:
    #           if s.find(b'resURL=') != -1:
    #               print(str(s))
    
    
