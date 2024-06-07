from rest_framework import serializers
from .models import Contact
#Import the serializer for the Model that is in a relationship with this one (Location with Contact at the "home" field/column of Contact Model)
from locations_api.serializers import LocationSerializer

# Here, we are creating a serializer that will take the data in our Database and convert it into JSON
class ContactSerializer(serializers.ModelSerializer):

    # Here, we want to display the data from the Location Model (street, city, state) as the values to the "home" field of the Contact Model in JSON format when we view it in the Django REST Framework and in our Front-End --> This is a Many-to-One relationship and to render the data from a relationship between two models (even if both are on different Apps), we MUST Import the serializer for that Model and set it to a variable of the same name as the Column it will plug its data in because serializers convert complex table data into JSON and also from JSON to table data to be stored in our Database --> NOTE: We add the "read_only=True" parameter so that the "home" field is read-only and will NOT accept "home" data for updates, creation, or deletion --> We only want to DISPLAY the data that is linked from both Models due to their relationship
    home = LocationSerializer(read_only=True)
    # Create a class with the Meta keyword (NOTE: We MUST use the 'Meta' keyword)
    class Meta:
        #In the 'model' property, we are telling Django WHICH model to use --> If we have mulitple models, we NEED to create another serializer, so another code block from lines 5 - 10
        model = Contact
        #In the 'fields' property, we are telling Django WHICH columns/fields to include when it converst the data into JSON
        fields = ('id', 'name', 'age', 'home')