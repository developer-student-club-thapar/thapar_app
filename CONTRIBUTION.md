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
```source venv/bin/actiavte```
- At the root of your project directory <br>
```bash 
pip install -r requirements.txt
```

- Rename ```.env.example``` to ```.env```
- Put the ```.env``` file in ```/hashx ```set secret key for your django project.
- You can use [https://djecrety.ir/] to generate your secret key
- Set ```DEBUG = True``` during development in ```.env``` file

- After the above setup, run <br>
```python hashx/manage.py makemigrations```
```python hashx/manage.py migrate```

- Start the backend server 
```python hashx/manage.py runserver```
Runs the backend server at default port ```8000```.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />

## Setup and running of project (Frontend)
- At your root directory run `npm install` to install all the dependencies
- Start react dev server
- ```npm run dev```

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.


#### Note
- If you are adding any new requirements for the project, make sure that you are adding it to ```requirements.txt```
- Use only ```npm install package_name``` to add new packages to the frontend part.
