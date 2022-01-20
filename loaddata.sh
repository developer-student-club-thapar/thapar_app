#!/usr/bin/env bash

# Set the current working directory (not the directory from which script is invoked)
dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
cd $dir


source venv/bin/activate
cd hashx

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py loaddata acad/fixtures/acad_sem.json
python3 manage.py loaddata acad/fixtures/acad_courses.json
python3 manage.py loaddata acad/fixtures/acad_branches.json
python3 manage.py loaddata acad/fixtures/acad_batches.json
python3 manage.py loaddata acad/fixtures/acad_file.json
python3 manage.py loaddata acad/fixtures/acad_files.json
python3 manage.py loaddata timetable
python3 manage.py loaddata auth_user.json
python3 manage.py loaddata users
python3 manage.py loaddata hostel
python3 manage.py runserver
