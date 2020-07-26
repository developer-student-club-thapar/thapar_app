from pathlib import Path
basepath = "/Users/sanchitjain/Downloads/myherupa/pages/societies.html"
from bs4 import BeautifulSoup
import re

soup = BeautifulSoup(open(basepath), 'html.parser')
page_details = soup.find_all("div", class_ = "col col-lg-3 col-md-3 col-sm-6 col-xs-12 card__height--small travel")
for page in page_details:
    print(page)