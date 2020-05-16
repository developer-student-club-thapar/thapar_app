# List of Some Awesome Commands

## To Generate a Database Entity Relationship Model DOT FILE

    python hashx/manage.py graph_models -a > my_project.dot

## To Generate a Database Entity Relationship Model SVG FILE

    python hashx/manage.py -o my_project_subsystem.png

## Quick and Dirty Admin System

    python hashx/manage.py admin_generator <APP NAME> > <APP NAME>/admin.py