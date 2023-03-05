from django.urls import path, include
from . import views
# from .views import ProfileViewSet
# from rest_framework.routers import DefaultRouter
# from .views import WeekViewSet, DayViewSet, WorkoutViewSet, ProfileViewSet


urlpatterns = [
    path('', views.WeekViewSet.as_view()),
    path('profile/', views.ProfileViewSet.as_view()), # name='profile-list-create'
    path('profile/<int:user_id>/', views.ProfileViewSet.as_view()),
    # path('<int:week_number>', views.WeekViewSet.as_view()),
    # path('<int:week_number>/<int:day_number>', views.DayViewSet.as_view()),
    # path('<int:week_number>/<int:day_number>/<int:', views.DayViewSet.as_view()),
]


# router = DefaultRouter()
# router.register(r'week', WeekViewSet, basename='week')
# router.register(r'day', DayViewSet, basename='day')
# router.register(r'workout', WorkoutViewSet, basename='workout')
# router.register(r'profile', ProfileViewSet, basename='profile')
# urlpatterns = router.urls