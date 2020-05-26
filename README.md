<div align = "center">

<img height=200px src= "https://github.com/developer-student-club-thapar/officialWebsite/blob/master/src/assets/dsc_logo.png">

<h1>DEVELOPER STUDENT CLUBS TIET</h1>

<a href="https://medium.com/developer-student-clubs-tiet"><img src="https://github.com/aritraroy/social-icons/blob/master/medium-icon.png?raw=true" width="60"></a>
<a href="https://twitter.com/dsctiet"><img src="https://github.com/aritraroy/social-icons/blob/master/twitter-icon.png?raw=true" width="60"></a>
<a href="https://www.linkedin.com/company/developer-student-club-thapar"><img src="https://github.com/aritraroy/social-icons/blob/master/linkedin-icon.png?raw=true" width="60"></a>
<a href="https://facebook.com/dscthapar"><img src="https://github.com/aritraroy/social-icons/blob/master/facebook-icon.png?raw=true" width="60"></a>
<a href="https://instagram.com/dsc.tiet"><img src="https://github.com/aritraroy/social-icons/blob/master/instagram-icon.png?raw=true" width="60"></a>

# Thapar Application 🚀

The Plan is to build an amazing application for Thapar Campus People from all walks of life !

</div>

## About  💫

The Aim of the project is to create something of value for people in Thapar Campus.
It is our current belief that the information disposal and spread isn't upto mark and there is ample opportunity for growth and making better systems for everyone's daily use. 
Our goals is to make this application system that is of daily tool which people look up to.


### Some Salient Features of Project 🔭
* A Scalable, Polished, Maintainable Backend Design created for growth and upgrades.
* Create Endpoints for `Every Developer in Campus ` 
* Build Secure Solutions and Applications for Thaparites with Clients in Web and Mobile (Current Plan)

## Contributon 🎛

* We would be more than elated to have PR from anyone, also outside community to grow the project. 
* If any bug fixes are are required and feature needs building please raise Issues and our team would respond quickly

## Getting Started ⚙️

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

We follow a systematic Git Workflow -
- Create a fork of this repo.
- Clone your fork of your repo on your pc.
- [Add Upstream to your clone](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- **Every change** that you do, it has to be on a branch. Commits on master would directly be closed.
- Make sure that before you create a new branch for new changes,[syncing with upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) is neccesary.

### Setting up pre-commit hooks
Make sure that you install pre-commit hooks before you make any contributions so that your code is refactored according to standards.
To do that run the following inside the project repo -
```pre-commit install``` 

### Setup and running of project (Backend) 🧮
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

### Setup and running of project (Frontend) 🔮
- At your root directory run `npm install` to install all the dependencies
- Start react dev server
- ```npm run dev```

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.


#### Note
- If you are adding any new requirements for the project, make sure that you are adding it to ```requirements.txt```
- Use only ```npm install package_name``` to add new packages to the frontend part.




## Built With ⚒
### Backend 📡
* [Django 3.0](https://www.djangoproject.com) - The web framework used in the project.
* [Django Graphene ( Django Graphene )](https://docs.graphene-python.org/projects/django/en/latest/) - Used to generate GraphQL API
* [Django Rest Framework](https://www.django-rest-framework.org) - Does the magic of making REST API endpoints 
### Web Application 🖥
* [React](https://reactjs.org) - Do you Even Need an introduction to this ? 😂
* [Relay](https://relay.dev) - Relay is specialized Framework from Facebook to integrate GraphQL in React
### Mobile Application( New Repo Soon ) 📲
* [React Native](https://reactnative.dev)- Better to write one codebase instead of two 😉

## Versioning 🗓

We use [SemVer](http://semver.org/) for versioning. 

## Authors ✍🏻

* **Shreshth Arora** - *Initial idea* - [AroraShreshth](https://github.com/AroraShreshth)
* **Ramyak Mehra** - *Backend Django and API* - [ramyak-mehra](https://github.com/ramyak-mehra)
* **Sanchit Jain** - *Backend Django and API* - [sanchjain](https://github.com/sanchjain)
* **Aniket Biswas** - *React Web Application* - [aniketbiswas21](https://github.com/aniketbiswas21)
* **Sanchit Nanda** - *UI/UX Designer* - [sanchitnanda](https://github.com/sanchitnanda)

See also the list of [contributors](https://github.com/developer-student-club-thapar/thapar_app/graphs/contributors) who participated in this project.

## License 📜

This project is licensed under the GNU-GENERAL-PUBLIC-LICENSE - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments 💯

* DSC Team for showing enthusiasm for the project
* All People who have seen the bright side and impact application can make
* All people who were initially approached and didn't see potential in project.
