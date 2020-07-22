# Welcome to the contributions of Thapar App project

We follow a systematic Git Workflow -
- Create a fork of this repo.
- Clone your fork of your repo on your pc.
- [Add Upstream to your clone](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- **Every change** that you do, it has to be on a branch. Commits on master would directly be closed.
- Make sure that before you create a new branch for new changes,[syncing with upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) is neccesary.

## Setting up pre-commit hooks
Make sure that you install pre-commit hooks before you make any contributions so that your code is refactored according to standards.
To do that run the following inside the project repo -
```pre-commit install``` 

## Setup and running of project (Backend)
- Fork the repo and clone it.
- Go in the repo and setup virtualenvironment using <br>
```python -m virtualenv venv``` 
- Then activate the environment using <br>
    On Windows
```source venv/Scripts/activate```
    On MacOS/Linux
```source venv/bin/activate```
- Change into the `./hashx` directory.
   > All the following steps are to be executed in the hashx directory.
- Install requirements\
```pip install -r requirements.txt```
- Rename ```.env.debug``` to ```.env```
- set secret key for your django project.
- You can use [https://djecrety.ir/] to generate your secret key


- After the above setup, run \
```python manage.py makemigrations```\
```python manage.py migrate```

- Start the backend server\
    ```python manage.py runserver```\
    Runs the backend server at default port ```8000```.\
    Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />

## Setup and running of project (Frontend)
- At your root directory run `npm install` to install all the dependencies
- Start react dev server
- ```npm run dev```

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

## Setup and running of Google MAPs
- In your .env file, Set ```REACT_APP_MAPS_API = Your API key```
- Refer [https://developers.google.com/maps/documentation/javascript/get-api-key] on how to generate an API key.


#### Note
- If you are adding any new requirements for the project, make sure that you are adding it to ```requirements.txt```
- Use only ```npm install package_name``` to add new packages to the frontend part.

---

## Deploying backend in production (Docker)

- Make sure you have docker and docker-compose installed.
- Go to the root of the project directory.
- Run the command `sudo docker-compose build` to build the containers.
- Open and inspect docker-compose.yml. Change the <kbd>port</kbd> setting on line 34 in this format.
    ```
     ports:
      - host_system_port:container_port
    ```
- Run the command `sudo docker-compose up -d` to run the containers in detatched mode.
- 3 containers will spin up
    * The Django application (hashx_application)
    * The Nginx Webserver (hashx_webserver)
    * The Postgres Database Container (hashx_database)
- Run the command `sudo docker exec -it <container-name> /bin/sh` to connect to a container with an interactive shell.