from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import ContactSerializer
from .models import Contact

# Views are like seeing through a window, they allow us to see certain information from our Database when the data is fetched and we can customize HOW MUCH and WHAT to see in each view we create here (NOTE: Name of the View is the class name)
class ContactList(generics.ListCreateAPIView):
    # Here, 'queryset' is telling Django HOW to query and display the data it's fetching from the Database
    queryset = Contact.objects.all().order_by('id')
    # Here, 'serializer_class' is refering from the serializer we created to convert the data to JSON when it is fetched from our Database and after importing here to be able to use it --> Since the data we see and display is through our 'views', we need to include both HOW to query and display the data and convert it to JSON
    serializer_class = ContactSerializer

#NOTE: Each view is assigned a CRUD operation and in DJANGO we can perform GET and POST within the same view and GET, UPDATE, DELETE within another view --> This is assigned by the syntax inside the parenthesis of the class name 'generics.RetrieveUpdateDestroyAPIView' 
class ContactDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all().order_by('id')
    serializer_class = ContactSerializer