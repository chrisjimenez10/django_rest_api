from django.db import models
from locations_api.models import Location
from django.utils import timezone

# Create your models here.
    #We create Models by creating a class and using the strict syntax inside the parenthesis --> NOTE: The Model in Django is the Table in our PostgreSQL Database (Model = Table)
class Contact(models.Model):
    # Here we are creating the properties for the class, which are going to become the columns in our table inside our PostgreSQL Database - Therefore, we MUST also explicitly assign the datatype --> There are mulitple fieldtypes() in Django (which refer to datatypes in PostgreSQL), so look up Docs or ChatGPT when necessary
        #We can set default values when creating the Class and we can also assign the range of characters for the CharField() for string datatypes (CharField() = VARCHAR())
    name = models.CharField(max_length=32)
    age = models.IntegerField()
    home = models.ForeignKey(Location, on_delete=models.CASCADE)
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return F"{self.name}, {self.age}, {self.home}"
