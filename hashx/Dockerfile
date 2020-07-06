### Production dockerfile. Using alpine linux

# pull official base image
FROM python:3.8.2-alpine

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1



# install dependencies

# install Pillow dependencies
RUN apk add build-base python-dev py-pip jpeg-dev zlib-dev

# install psycopg2 dependencies
RUN apk update \
    && apk add --no-cache postgresql-dev gcc python3-dev musl-dev libffi-dev openssl-dev

# install packages
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN python -m pip install -U --force-reinstall pip && pip install wheel && pip install -r requirements.txt && pip install gunicorn==19.9.0 psycopg2-binary==2.8.3


# copy entrypoint.sh
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# copy project
COPY . /usr/src/app/

ENV DJANGO_SETTINGS_MODULE hashx.settings.prod_settings

# run entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
