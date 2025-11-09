from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    p_no = models.IntegerField(default=0000)
    p_img = models.ImageField()
    
class Fav(models.Model):
    f_no = models.IntegerField(default=0000)
    f_img = models.ImageField()


class Logo(models.Model):
    l_no = models.IntegerField(default=0000)
    l_name = models.CharField(max_length= 50)
    l_img = models.ImageField()
    l_link = models.CharField(max_length= 50)
    

class Data(models.Model):
    d_no = models.IntegerField(default=0000)
    d_line_1 = models.TextField(max_length=500)
    d_line_2 = models.TextField(max_length=500)
    d_line_3 = models.TextField(max_length=500)
    
