from django.contrib import admin

# Register your models here.
from .models import Location
admin.site.register(Location)

#NOTE: If we want to have access and view the Models from each App in our Django Project, we MUST register the Models to the Admin site in this file "admin.py" for EACH App --> In other words, each App has to register their models inside their OWN "admin.py" file