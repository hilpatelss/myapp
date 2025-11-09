from django.shortcuts import render
from django.contrib import messages
from django.http import HttpResponse
from django.contrib.auth.models import User  
from myweb.models import *

# Create your views here.
def home(request):
    try:
        query1 = Profile.objects.get( p_no = 1)
        query4 = Fav.objects.get( f_no = 1)
        query2_1 = Logo.objects.get( l_no = 1)
        query2_2 = Logo.objects.get( l_no = 2)
        query2_3 = Logo.objects.get( l_no = 3)
        query2_4 = Logo.objects.get( l_no = 4)
        query2_5 = Logo.objects.get( l_no = 5)
        query2_6 = Logo.objects.get( l_no = 6)
        query2_7 = Logo.objects.get( l_no = 7)
        query2_8 = Logo.objects.get( l_no = 8)
        query3 = Data.objects.filter().order_by('d_no')

        context = {'page': 'Hil Patel' , 'q4':query4 ,'q1':query1 , 'q2_1':query2_1 , 'q2_2':query2_2, 'q2_3':query2_3 , 'q2_4':query2_4 , 'q2_5':query2_5, 'q2_6':query2_6, 'q2_7':query2_7, 'q2_8':query2_8, 'q3':query3 }

        return render(request , "index.html", context)
    except:
        context = {'page': 'Hil Patel'}

        return render(request , "index.html", context)
