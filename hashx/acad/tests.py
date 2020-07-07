from django.test import TestCase
from .models import Drivefolder

# Create your tests here.
class DrivefolderTest(TestCase):
    def test_drivefolder_present(self):
        drivefolder = Drivefolder(name='xyz', drive_id='driveid', year=1, file_name='filename')
        drivefolder.save()
        drivefolders = Drivefolder.objects.count()
        self.assertGreater(drivefolders , 0)
        self.assertRaises(TypeError, drivefolders , 0)

    def test_drivefolders_added(self):
        initial_count = Drivefolder.objects.count()
        drivefolder = Drivefolder(name='xyz', drive_id='driveid', year=1, file_name='filename')
        self.assertEqual(Drivefolder.objects.count(), initial_count)
        drivefolder.save()
        self.assertEqual(Drivefolder.objects.count(), initial_count + 1)
        self.assertRaises(TypeError, Drivefolder.objects.count(), initial_count + 1)