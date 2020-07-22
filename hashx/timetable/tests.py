from django.test import TestCase
from .models import Holidays , Class , TimetableBoard , Location
from acad.models import Course, Branch, Batch

# Create your tests here.
class HolidaysTest(TestCase):
    def test_holidays_present(self):
        holiday = Holidays(name='xyz' , date='2020-01-01')
        holiday.save()
        holidays = Holidays.objects.count()
        self.assertGreater(holidays , 0)
        self.assertRaises(TypeError, holidays , 0)

    def test_holidays_added(self):
        initial_count = Holidays.objects.count()
        holiday = Holidays(name='xyz' , date='2020-01-01')
        self.assertEqual(Holidays.objects.count() , initial_count)
        holiday.save()
        self.assertEqual(Holidays.objects.count() , initial_count + 1)
        self.assertRaises(TypeError,Holidays.objects.count() , initial_count + 1)

    def test_holiday_create_fail(self):
        self.assertRaises(TypeError , Holidays(name='' , date=''))
        self.assertRaises(TypeError , Holidays(name='a' , date=''))
        self.assertRaises(TypeError , Holidays(name='a' , date='2020'))

# class ClassTest(TestCase):
#     @classmethod
#     def setUp(self):
#         self.batch = Batch.objects.first()
#         self.timetable = TimetableBoard.objects.first()
#         self.location = Location.objects.first()

#     def test_classes_present(self):
#         classes = Class.objects.create(
#             timetableboard = self.timetable,
#             type = 'Lecture',
#             created_date = '2020-01-02',
#             day = 'Monday',
#             start_time = '10:52:35',
#             end_time = '10:52:35',
#             location = self.location,
#             published = True,
#             private = True
#         )
#         classes_count = Class.objects.count()
#         self.assertGreater(classes , 0)
#         self.assertRaises(TypeError, classes , 0)

#     # def test_classes_added(self):
#     #     initial_count = Holidays.objects.count()
#     #     classes = Holidays(name='xyz' , date='2020-01-01')
#     #     self.assertEqual(Holidays.objects.count() , initial_count)
#     #     classes.save()
#     #     self.assertEqual(Holidays.objects.count() , initial_count + 1)
#     #     self.assertRaises(TypeError,Holidays.objects.count() , initial_count + 1)

#     # def test_classes_create_fail(self):
#     #     self.assertRaises(TypeError , Holidays(name='' , date=''))
#     #     self.assertRaises(TypeError , Holidays(name='a' , date=''))
#     #     self.assertRaises(TypeError , Holidays(name='a' , date='2020'))
