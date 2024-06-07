from rest_framework import serializers
from .models import Location
from companies_api.serializers import CompanySerializer


class LocationSerializer(serializers.ModelSerializer):

    #This is the Django syntax to Display the JSON Data on the Django REST Framework and our Front-End as a list of objects when it is a Many-To-Many Relationship between the Location Model and Company Model --> NOTE: This is the serializer configuration to display the data in JSON format (so we can see the list of objects), but a MAJORE syntax change is also done in the Model Class itself ( Review the locations_api/models.py file )
        #We use the serializer form the other Model and pass two arguments: 1.many=True and 2.read_only=True --> NOTE: If we want to be able to alter the data (CRUD) in our Front-End through a controlled form in React, we need to change the parameter to read_only=False
    companies = CompanySerializer(many=True, read_only=False)

    class Meta:
        model = Location
        fields = ('id', 'street', 'city', 'state', 'companies')

       
