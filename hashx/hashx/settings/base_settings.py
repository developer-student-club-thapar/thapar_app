from decouple import config
from django.contrib import messages
import os


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
    "graphene_django",
    "rest_framework",
    "users.apps.UsersConfig",
    "acad",
    "society",
    "featurebug",
    "lostfound",
    "permission",
    "buzz",
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
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
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

AUTHENTICATION_BACKENDS = [
    "graphql_jwt.backends.JSONWebTokenBackend",
    "django.contrib.auth.backends.ModelBackend",
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
MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

LOGIN_REDIRECT_URL = "/"
LOGIN_URL = "login"

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_HOST_USER = config("EMAIL_HOST_USER", default="")
EMAIL_USE_TLS = True
EMAIL_USE_SSL = False
EMAIL_HOST_PASSWORD = config("EMAIL_HOST_PASSWORD", default="")

# IMPORTANT: Logging section moved to dev settings

# REST_FRAMEWORK = {
#     'DEFAULT_PERMISSION_CLASSES': [
#         'rest_framework.authentication.BasicAuthentication',
#     ]
# }
