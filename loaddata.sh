#!/usr/bin/env bash

# Set the current working directory (not the directory from which script is invoked)
dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
cd $dir


source venv/bin/activate
cd hashx

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py loaddata acad
python3 manage.py loaddata timetable
python3 manage.py loaddata hostel
python3 manage.py loaddata users
python3 manage.py runserver