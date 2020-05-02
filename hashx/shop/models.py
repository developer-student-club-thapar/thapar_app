from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
import uuid


class ShopType(models.Model):
    """
    Just a class to handle different Shop Types

    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type = models.CharField(max_length=50)
    image = models.ImageField(upload_to="shoptypes", null=True)


class Shop(models.Model):
    """
    This model conntains the details of Shops in Campus 
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    about = models.CharField(max_length=1000, null=True)
    delivery = models.NullBooleanField()
    in_campus = models.BooleanField(default=True)
    image = models.ImageField(upload_to='shop_profile')
    type = models.ForeignKey(
        ShopType, null=True, blank=True, on_delete=models.SET_NULL)
    stars = models.DecimalField(
        max_digits=3, decimal_places=2, default=0.00)  # Out of 5
    owner = models.CharField(max_length=200, null=True)
    phone_no = models.CharField(max_length=10, null=True)
    time_open = models.TimeField()
    time_close = models.TimeField()
    paytm_id = models.CharField(max_length=100, null=True)
    location = models.URLField()  # Google Maps URL Link
    menu_image = models.ImageField(upload_to='shop_menu_image')


class ShopItem(models.Model):
    """
    Items being Sold in the Shops 
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    shop = models.ForeignKey(Shop, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="shopitem", null=True)
    price = models.PositiveIntegerField()
    stars = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)


class ShopItemReview(models.Model):
    """
    Shop Item Review for User to make Review on Shop Item 
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    shop_item = models.ForeignKey(
        ShopItem, on_delete=models.SET_NULL, null=True)
    stars = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    review = models.CharField(max_length=256)
    date_posted = models.DateTimeField(default=timezone.now)


class ShopReview(models.Model):
    """
    Shop Review for User to make Review on whole Shop Item 
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    shop = models.ForeignKey(
        Shop, on_delete=models.SET_NULL, null=True)
    stars = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    review = models.CharField(max_length=256)
    date_posted = models.DateTimeField(default=timezone.now)
