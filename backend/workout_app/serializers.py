from rest_framework import serializers
from .models import Week, Day, Workout, Profile

# Serializers define the API representation.

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = '__all__'

class DaySerializer(serializers.ModelSerializer):
    workouts = WorkoutSerializer(many=True, read_only=True)
    
    class Meta:
        model = Day
        fields = '__all__'

class WeekSerializer(serializers.ModelSerializer):
    days = DaySerializer(many=True, read_only=True)

    class Meta:
        model = Week
        fields = '__all__'



class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'