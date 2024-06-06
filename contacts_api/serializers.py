from rest_framework import serializers
from .models import Contact

# Here, we are creating a serializer that will take the data in our Database and convert it into JSON
class ContactSerializer(serializers.ModelSerializer):
    # Create a class with the Meta keyword (NOTE: We MUST use the 'Meta' keyword)
    class Meta:
        #In the 'model' property, we are telling Django WHICH model to use --> If we have mulitple models, we NEED to create another serializer, so another code block from lines 5 - 10
        model = Contact
        #In the 'fields' property, we are telling Django WHICH columns/fields to include when it converst the data into JSON
        fields = ('id', 'name', 'age',)