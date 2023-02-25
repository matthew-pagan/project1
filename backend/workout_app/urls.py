from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WeekViewSet, DayViewSet, WorkoutViewSet, ProfileViewSet

router = DefaultRouter()
router.register(r'week', WeekViewSet, basename='week')
router.register(r'day', DayViewSet, basename='day')
router.register(r'workout', WorkoutViewSet, basename='workout')
router.register(r'profile', ProfileViewSet, basename='profile')
urlpatterns = router.urls