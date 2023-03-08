from django.urls import path, include
from . import views

# from rest_framework.routers import DefaultRouter
# from .views import WeekViewSet, DayViewSet, WorkoutViewSet, ProfileViewSet


urlpatterns = [
    path('', views.WeekViewSet.as_view()),
    path('users/', views.UserSignupView.as_view()), # retrieves all users
    path('profiles/', views.ProfilesViewSet.as_view()), # retrieve all profiles
    path('profile/', views.ProfileViewSet.as_view()),
    path('profile/<int:id>/', views.ProfileViewSet.as_view()),
] # retrieve a specific profile by ID
    # path('<int:week_number>', views.WeekViewSet.as_view()),
    # path('<int:week_number>/<int:day_number>', views.DayViewSet.as_view()),
    # path('<int:week_number>/<int:day_number>/<int:', views.DayViewSet.as_view()),



# from django.urls import path, include
# from . import views

# # from rest_framework.routers import DefaultRouter
# # from .views import WeekViewSet, DayViewSet, WorkoutViewSet, ProfileViewSet


# urlpatterns = [
#     path('', views.WeekViewSet.as_view()),
#     path('profiles/', views.ProfilesViewSet.as_view()), # retrieve all profiles
#     path('profile/', views.ProfileViewSet.as_view()),
#     path('profile/<int:id>/', views.ProfileViewSet.as_view()),
#     ] # retrieve a specific profile by ID
#     # path('<int:week_number>', views.WeekViewSet.as_view()),
#     # path('<int:week_number>/<int:day_number>', views.DayViewSet.as_view()),
#     # path('<int:week_number>/<int:day_number>/<int:', views.DayViewSet.as_view()),

