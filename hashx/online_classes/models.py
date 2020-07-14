from django.db import models
from users.models import Instructor
from acad.models import Batch, Course

class Lecture(models.Model):
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE)
    batch = models.ForeignKey(Batch, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    meetingURL = models.URLField(max_length=200, null=True, blank=True)
    isCompleted = models.BooleanField(default=True)
    recordingURL = models.URLField(max_length=200, null=True, blank=True)
    time = models.DateTimeField()

    def __str__(self):
        return f"Lecture scheduled for {self.batch} by {self.instructor} for the course {self.course}."