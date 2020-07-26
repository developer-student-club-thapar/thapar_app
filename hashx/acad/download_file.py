from django.core.management.base import BaseCommand, CommandError
from acad.models import File

class Command(BaseCommand):
    help = 'Downloads corresponding file for object'

    # def add_arguments(self, parser):