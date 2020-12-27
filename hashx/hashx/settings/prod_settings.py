from .base_settings import *

DEBUG = False
AWS_ACCESS_KEY_ID = config('AWS_ACCESS_KEY_ID', default="")
AWS_SECRET_ACCESS_KEY = config('AWS_SECRET_ACCESS_KEY', default="")
AWS_STORAGE_BUCKET_NAME = config('AWS_STORAGE_BUCKET_NAME', default="")
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None
AWS_S3_REGION_NAME = "ap-south-1"
AWS_S3_HOST = "s3.ap-south-1.amazonaws.com"
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

DATABASES = {
    "default": {
        "ENGINE": config("SQL_ENGINE", "django.db.backends.sqlite3"),
        "NAME": config("SQL_DATABASE", os.path.join(BASE_DIR, "db.sqlite3")),
        "USER": config("SQL_USER", "user"),
        "PASSWORD": config("SQL_PASSWORD", "password"),
        "HOST": config("SQL_HOST", "localhost"),
        "PORT": config("SQL_PORT", "5432"),
    }
}

# Axes has been Enabled
AXES_ENABLED = True


# CORS CONFIG
CORS_ORIGIN_WHITELIST = [
    "https://vexio.in",
    "https://front.vexio.in",
    "https://vexio.netlify.app",
    "https://react.vexio.in"
]

if DEBUG == True:
    CORS_ORIGIN_WHITELIST += ['http://localhost:3000']


CORS_ALLOW_METHODS = [
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]

CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]
SESSION_COOKIE_SAMESITE = 'None'
SESSION_COOKIE_SECURE = True