from decouple import config
from django.contrib import messages
import os
import datetime
import environ
from environ import Env, Path
env = Env()

DEBUG = True
SECRET_KEY = config('SECRET_KEY', cast=str)
ALLOWED_HOSTS = config('ALLOWED_HOSTS', cast=lambda v: [
                       s.strip() for s in v.split(',')])

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

    # Third Party Application
    "django_extensions",
    "storages",
    "corsheaders",
    "allauth",
    "allauth.account",
    "allauth.socialaccount",
    "axes",
    "graphene_django",
    "push_notifications",
    "graphql_jwt.refresh_token.apps.RefreshTokenConfig",
    "social_django",
    "rest_framework",

    # Local Apps
    "users.apps.UsersConfig",
    "acad.apps.AcadConfig",
    "society.apps.SocietyConfig",
    "featurebug.apps.FeaturebugConfig",
    "lostfound.apps.LostfoundConfig",
    "permission.apps.PermissionConfig",
    "buzz.apps.BuzzConfig",
    "invite.apps.InviteConfig",
    "hostel.apps.HostelConfig",
    "forum.apps.ForumConfig",
    "notification.apps.NotificationConfig",
    "shop.apps.ShopConfig",
    "developer.apps.DeveloperConfig",
    "wifipass.apps.WifipassConfig",
    "timetable.apps.TimetableConfig",
    "analytics.apps.AnalyticsConfig",
    "members.apps.MembersConfig",
    "chat.apps.ChatConfig",
    "exam.apps.ExamConfig",
    "frontend.apps.FrontendConfig",

]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    'corsheaders.middleware.CorsMiddleware',
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
                "django.template.context_processors.request",
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
    'JWT_EXPIRATION_DELTA': datetime.timedelta(days=30),
    'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=7),
}

AUTHENTICATION_BACKENDS = [
    # Caution Axes Backedn should be the first one
    # because it should process every login request via any system
    # "axes.backends.AxesBackend",
    # Insert New Auth if adding below this point
    "graphql_jwt.backends.JSONWebTokenBackend",
    "django.contrib.auth.backends.ModelBackend",
    "social_core.backends.google.GoogleOAuth2",
    "allauth.account.auth_backends.AuthenticationBackend",
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


STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "static")
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
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = config(
    "SOCIAL_AUTH_GOOGLE_OAUTH2_KEY", default="")
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = config(
    "SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET", default="")

# IMPORTANT: Logging section moved to dev settings

# REST_FRAMEWORK = {
#     'DEFAULT_PERMISSION_CLASSES': [
#         'rest_framework.authentication.BasicAuthentication',
#     ]
# }

# Push Notification Settings

PUSH_NOTIFICATIONS_SETTINGS = {
    "FCM_API_KEY": config("FCM_API_KEY", default=""),
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


# DJANGO ALL AUTH
# Refer to this doc https://django-allauth.readthedocs.io/en/latest/configuration.html
ACCOUNT_AUTHENTICATION_METHOD = "username_email"
ACCOUNT_CONFIRM_EMAIL_ON_GET = True
ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = LOGIN_URL
ACCOUNT_EMAIL_CONFIRMATION_EXPIRE_DAYS = 1
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_EMAIL_VERIFICATION = True
ACCOUNT_EMAIL_SUBJECT_PREFIX = "[ Vexio.in ]"
ACCOUNT_EMAIL_CONFIRMATION_COOLDOWN = 200
ACCOUNT_EMAIL_MAX_LENGTH = 254
ACCOUNT_FORMS = {'instructor-login': 'users.forms.LoginForm',
                 'instructor-register': 'users.forms.RegisterForm'}
ACCOUNT_LOGIN_ON_EMAIL_CONFIRMATION = True
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_USERNAME_BLACKLIST = None
ACCOUNT_SIGNUP_PASSWORD_ENTER_TWICE = True
