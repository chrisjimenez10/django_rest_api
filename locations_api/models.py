from django.db import models
from companies_api.models import Company


# Create your models here.
class Location(models.Model):
    street = models.CharField(max_length=50)
    city = models.CharField(max_length=32)
    state = models.CharField(max_length=2)

    # Here, we are dealing with a Many-to-Many Relationship, where we want to have a LIST of different companies be in the "companies" field/column of the Location model/table --> In other words, these companies share the same location, so it will be a List (If we have a List, then we have a Many-To-Many Relationship and we need to update our Django code)
    companies = models.ManyToManyField(Company, related_name='locations')

    #The __str__(self) function is a special method that we define in our model class to return a string representation of the model instance --> This string representation is used in various places, such as the Django admin interface and in the Django shell when you query model instances
        #Purpose:
            #1.Readability: It makes it easier to understand and work with model instances by providing a human-readable string representation of the object
            #2.Debugging: When you print a model instance or inspect it in the shell, the __str__ method gives a clear and concise description of the object
            #3.Admin Interface: In the Django admin interface, the string returned by the __str__ method is used as the display name for the model instances
    def __str__(self):
        return F"{self.street}, {self.city}, {self.state}"
    
