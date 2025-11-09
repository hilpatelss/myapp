from django.contrib import admin
from . import models

# Register your models here.

class Profile(admin.ModelAdmin):
    list_display= ('p_img' , 'p_no')
admin.site.register(models.Profile, Profile)

class Logo(admin.ModelAdmin):
    list_display= ('l_no','l_name','l_img','l_link')
admin.site.register(models.Logo, Logo)

class Data(admin.ModelAdmin):
    list_display= ('d_no','d_line_1','d_line_2','d_line_3')
admin.site.register(models.Data, Data)