
from .base_settings import *


DEBUG = True

INSTALLED_APPS += [
    'debug_toolbar',
]

AWS_ACCESS_KEY_ID = config('AWS_ACCESS_KEY_ID', default="")
AWS_SECRET_ACCESS_KEY = config('AWS_SECRET_ACCESS_KEY', default="")
AWS_STORAGE_BUCKET_NAME = config('AWS_STORAGE_BUCKET_NAME', default="")
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None
AWS_S3_REGION_NAME = config('AWS_S3_REGION_NAME', default="")
AWS_S3_HOST = config('AWS_S3_HOST', default="")
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
# STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

if DEBUG == True:
    STATIC_ROOT = ""
    STATICFILES_DIRS = [os.path.join(BASE_DIR, "static")]

MIDDLEWARE.insert(0, "debug_toolbar.middleware.DebugToolbarMiddleware")


DATABASES = {
    "default": {
        "ENGINE": config("SQL_ENGINE", "django.db.backends.sqlite3"),
        "NAME": config("SQL_DATABASE", os.path.join(BASE_DIR, "db.sqlite3")),
        "USER": config("SQL_USER", "user"),
        "PASSWORD": config("SQL_PASSWORD", ""),
        "HOST": config("SQL_HOST", "localhost"),
        "PORT": config("SQL_PORT", "5432"),
    }
}

if os.environ.get('GITHUB_WORKFLOW'):
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'test_database',
            'USER': 'test_user',
            'PASSWORD': 'test_password',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }


# Debug Toolbar

# Debug toolbar will only be shown on these IPs
INTERNAL_IPS = [
    "127.0.0.1",
    "localhost",
]

# Add, remove or change the order of panels here.
DEBUG_TOOLBAR_PANELS = [
    "debug_toolbar.panels.versions.VersionsPanel",
    "debug_toolbar.panels.timer.TimerPanel",
    "debug_toolbar.panels.settings.SettingsPanel",
    "debug_toolbar.panels.headers.HeadersPanel",
    "debug_toolbar.panels.request.RequestPanel",
    "debug_toolbar.panels.sql.SQLPanel",
    "debug_toolbar.panels.staticfiles.StaticFilesPanel",
    "debug_toolbar.panels.templates.TemplatesPanel",
    "debug_toolbar.panels.cache.CachePanel",
    "debug_toolbar.panels.signals.SignalsPanel",
    "debug_toolbar.panels.logging.LoggingPanel",
    "debug_toolbar.panels.redirects.RedirectsPanel",
    "debug_toolbar.panels.profiling.ProfilingPanel",
]

# Add custom toolbar settings here
DEBUG_TOOLBAR_CONFIG = {
    "INTERCEPT_REDIRECTS": True,
    "SHOW_COLLAPSED": True,
}


# CORS CONFIG
CORS_ORIGIN_WHITELIST = [
    "https://vexio.in",
    "https://front.vexio.in",
    "https://vexio.netlify.app",
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
