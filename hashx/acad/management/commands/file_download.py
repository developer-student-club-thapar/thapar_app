from django.core.management.base import BaseCommand, CommandError
from acad.models import File
import urllib.request
from time import sleep
import random


class Command(BaseCommand):
    help = 'Downloads file from MyHerupa and saves it to django application'

    # def add_arguments(self, parser):
    #     parser.add_argument('poll_ids', nargs='+', type=int)

    def handle(self, *args, **options):
        i = 1
        for file in File.objects.all():
            link = file.web_content_link
            file_name = file.file
            new_file_name = f'{file_name}'.split("/")[0] + '/' + f'{link}'.strip(
                'https://drive.google.com/uc?id=').strip('&export=download') + '--' + f'{file_name}'.split("/")[1]
            print(f'{ i } {link} ')

            if not file.is_downloaded:
                try:

                    urllib.request.urlretrieve(
                        link, f'/Users/shreshth/sandbox/projects/thapar_app/hashx/media/{new_file_name}')
                    file.file = new_file_name
                    file.is_downloaded = True
                    file.save()
                    self.stdout.write(self.style.SUCCESS(
                        f'Downloaded {new_file_name} '))
                    sleep(2)
                except Exception:
                    print(f'Some Error Happened Downloading {new_file_name} ')
                    s = random.randint(100, 160)
                    print(f'sleeping for {s}')
                    sleep(s)

            else:
                self.stdout.write(self.style.WARNING(
                    f' Already Downloaded {new_file_name} '))
            if i % 20 != 0:
                i += 1
            else:
                i += 1
                s = random.randint(30, 60)
                print(f'sleeping for {s}')
                sleep(s)
        self.stdout.write(self.style.SUCCESS(
            'Successfully Ended Downloading all files'))
