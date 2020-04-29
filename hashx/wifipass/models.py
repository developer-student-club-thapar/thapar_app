from django.db import models
from django.urls import reverse
import uuid
# Create your models here.


class WifiCreds(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # Details
    networkName = models.CharField(max_length=20, blank=True, null=True)
    password = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        ordering = ["networkName"]
        verbose_name_plural = "Wifi Credentials"

    def __str__(self):
        return self.networkName

    def get_absolute_url(self):
        return reverse("wificreds-detail", kwargs={"pk": self.pk})

# Model to map availability for  wifi credential
# Location ( Long , Lat )
# The aim is to make a heatmap of the wifi creds


class WifiCredRecord(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    # logical connection
    wificred = models.ForeignKey(WifiCreds, on_delete=models.PROTECT)

    #Logitude and Latitude
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    latitute = models.DecimalField(max_digits=9, decimal_places=6)

    # Date time of Record
    date = models.DateTimeField()
