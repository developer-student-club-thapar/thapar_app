from decouple import config
from django.contrib import messages
import os
import datetime


DEBUG = config("DEBUG", default=True)
SECRET_KEY = config("SECRET_KEY", default="default-secret-key")
ALLOWED_HOSTS = config("DJANGO_ALLOWED_HOSTS", default="*").split(" ")

BASE_DIR = os.path.dirname(os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))))

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.sites",
    "django.contrib.admindocs",
    'axes',
    "graphene_django",
    'graphql_jwt.refresh_token.apps.RefreshTokenConfig',
    'social_django',
    "rest_framework",
    "users.apps.UsersConfig",
    "acad",
    "society",
    "featurebug",
    "lostfound",
    "permission",
    "buzz",
    "invite",
    "hostel",
    "forum",
    "notification",
    "shop",
    "developer",
    "social_connect",
    "wifipass",
    "timetable",
    "analytics",
    "members",
    "chat",
    "exam",
    "frontend",
    "django_extensions",
    "push_notifications",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    # Caution Axes Middle Ware Should be last one
    "axes.middleware.AxesMiddleware",
]

ROOT_URLCONF = "hashx.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                'social_django.context_processors.backends',
            ],
        },
    },
]

WSGI_APPLICATION = "hashx.wsgi.application"

# IMPORTANT :  Database configrations are now in their respective dev and production files


GRAPHENE = {
    "MIDDLEWARE": ["graphql_jwt.middleware.JSONWebTokenMiddleware", ],
    "SCHEMA": "hashx.schema.schema",
    "SCHEMA_OUTPUT": "schema.graphql",  # defaults to schema.json,
    # Defaults to None (displays all data on a single line)
    "SCHEMA_INDENT": 2,
}
GRAPHQL_JWT = {
    # ...
    "JWT_VERIFY_EXPIRATION": True,
    'JWT_LONG_RUNNING_REFRESH_TOKEN': True,
    'JWT_EXPIRATION_DELTA': datetime.timedelta(minutes=30),
    'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=7),
}

AUTHENTICATION_BACKENDS = [
    # Caution Axes Backedn should be the first one
    # because it should process every login request via any system
    # "axes.backends.AxesBackend",
    # Insert New Auth if adding below this point
    "graphql_jwt.backends.JSONWebTokenBackend",
    "django.contrib.auth.backends.ModelBackend",
    'social_core.backends.google.GoogleOAuth2'
]

GRAPH_MODELS = {
    "all_applications": True,
    "group_models": True,
}
# To generate graphs visit https://django-extensions.readthedocs.io/en/latest/graph_models.html#default-settings

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator", },
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator", },
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator", },
]


LANGUAGE_CODE = "en-us"

# We only support one region as of now, pre-set to prevent timezone trouble
TIME_ZONE = "Asia/Kolkata"

USE_I18N = True

USE_L10N = True

USE_TZ = True

# For the django sites framework
SITE_ID = 1


# Static files
STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "static")

# Media Files
MEDIA_ROOT = os.path.join(BASE_DIR, "media")
MEDIA_URL = "/media/"


LOGIN_REDIRECT_URL = "/"
LOGIN_URL = "login"

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_HOST_USER = config("EMAIL_HOST_USER", default="")
EMAIL_USE_TLS = True
EMAIL_USE_SSL = False
EMAIL_HOST_PASSWORD = config("EMAIL_HOST_PASSWORD", default="")


SOCIALACCOUNT_PROVIDERS = {
    'google': {
        'SCOPE': ['email'],
        'AUTH_PARAMS': {'access_type': 'online'}
    }
}
# SOCIAL_AUTH_POSTGRES_JSONFIELD = True
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = "423818856081-ocfj6oq6okclmqokie0hp9rvru6nmjo6.apps.googleusercontent.com"
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = "DWUYJullIXwbKIbpyNOINszt"

# IMPORTANT: Logging section moved to dev settings

# REST_FRAMEWORK = {
#     'DEFAULT_PERMISSION_CLASSES': [
#         'rest_framework.authentication.BasicAuthentication',
#     ]
# }

# Push Notification Settings

PUSH_NOTIFICATIONS_SETTINGS = {
    "FCM_API_KEY": "AAAArfSaP2o:APA91bGaon9PlNQNseZyJl27TA-jXwXKW7q7lf9R-qXAMQEDsL5E8q3cqYEjOFlZr0VlEcbkNpLp9H4Zk6jn0hT8Tl9jezYOOrXiau_bXBO88p-MdbXq8fVsakqL5RANepmClYhf0Tek",
}

# Axes Config
"""
axes.W001 for invalid CACHES configuration.
axes.W002 for invalid MIDDLEWARE configuration.
axes.W003 for invalid AUTHENTICATION_BACKENDS configuration.
axes.W004 for deprecated use of AXES_* setting flags.
"""
SILENCED_SYSTEM_CHECKS = ['axes.W003']
AXES_FAILURE_LIMIT = 7
AXES_LOCK_OUT_AT_FAILURE: True
AXES_COOLOFF_TIME = 15  # No. of Hours after with Restrcited User will be allowed to login
AXES_USE_USER_AGENT = True
AXES_VERBOSE = True
AXES_RESET_ON_SUCCESS = True
