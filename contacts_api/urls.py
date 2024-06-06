from django.urls import path
# Here, we are importing EVERYTHING inside the views file (NOTE: Syntax for importing data/modules in Python uses dot notation instead of forward slashes like in JavaScript)
from . import views

urlpatterns = [
    
    path('api/contacts', views.ContactList.as_view(), name='contact_list'),
    path('api/contacts/<int:pk>', views.ContactDetail.as_view(), name='contact_detail')

]