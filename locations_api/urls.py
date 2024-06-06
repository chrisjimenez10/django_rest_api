from django.urls import path
from . import views

urlpatterns = [
    path('api/locations', views.LocationList.as_view(), name='location_list'),
    path('api/locations/<int:pk>', views.LocationDetail.as_view(), name='location_detail')
]

#The "name" argument: It can be used to refer to the URL pattern elsewhere in our Django project
    # 1. Reverse URL Matching: We can revers the URL pattern by using the "name" argument - This means you can generate the URL for a specific view from its name, which helps in creating dynamic URLs in your templates and views

    # 2. Maintainability: If you ever change the actual URL path (e.g., from 'api/locations' to 'api/v1/locations'), you only need to update it in the urlpatterns. The name remains the same, so the rest of your code (using the named URL) doesn't need to change

    # 3. Readability: Named URLs make your code more readable and descriptive -  Instead of hardcoding URLs in your templates and views, you use meaningful names

#The ".as_views()" method: This method is a class method provided by Django's generic views. It serves the following purposes:
    # 1. Instantiates the View: When you call "as_view()"", it creates an instance of the view class --> This instance will handle the HTTP request

    # 2. Creates a View Funcion: The method returns a function that can be used as a Django view --> This function takes a request and returns a response

    #3. Dispatches the Request: The returned function handles the request by calling the appropriate method on the view instance (like get(), post(), etc.), depending on the HTTP method of the request --> Responsible handling CRUD requests (GET, POST, PUT, DELETE)
        # -- The "as_view()" handles requests in an object-oriented manner