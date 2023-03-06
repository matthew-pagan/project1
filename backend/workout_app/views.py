from .models import Week, Day, Workout, Profile
from .serializers import WeekSerializer, DaySerializer, WorkoutSerializer, ProfileSerializer, UserSerializer
from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import authentication, status
from rest_framework.authentication import TokenAuthentication # permissions
from rest_framework.permissions import IsAuthenticated, AllowAny #IsAdminUser
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
# from rest_framework import viewsets
# from django.shortcuts import get_object_or_404
# from rest_framework.decorators import api_view
# from rest_framework import generics, permissions


class WeekViewSet(APIView):
    def get(self, request, week_number=None):
        if week_number: 
            data = Week.objects.get(week_number=week_number)
            serializer = WeekSerializer(data)
        else:
            data = Week.objects.all()
            serializer = WeekSerializer(data, many=True)
        return Response({"result": serializer.data})
    
class DayViewSet(APIView):
    def get(self, request, day_number=None):
        if day_number: 
            data = Day.objects.get(day_number=day_number)
            serializer = DaySerializer(data)
        else:
            data = Day.objects.all()
            serializer = DaySerializer(data, many=True)
        return Response({"result": serializer.data})
    
class WorkoutViewSet(APIView):
    def get(self, request, id=None): # id or title?
        if id: 
            data = Workout.objects.get(id=id)
            serializer = DaySerializer(data)
        else:
            data = Workout.objects.all()
            serializer = WorkoutSerializer(data, many=True)
        return Response({"result": serializer.data})
    
class UserSignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            profile_data = {'user': user.id}
            profile_serializer = ProfileSerializer(data=profile_data)
            if profile_serializer.is_valid():
                profile_serializer.save()
            token = Token.objects.create(user=user)
            return Response({'token': token.key}, status=status.HTTP_201_CREATED)
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ProfileViewSet(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = ProfileSerializer
    
    def post(self, request):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            profile = serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request, user_id=None): # id?
        if user_id: 
            data = Profile.objects.get(user_id=user_id)
            serializer = ProfileSerializer(data)
        else:
            data = Profile.objects.all()
            serializer = ProfileSerializer(data, many=True)
        return Response({"result": serializer.data})

    def put(self, request, user_id=None): # id?
        profile = Profile.objects.get(user_id=user_id)
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, user_id=None):
        profile = Profile.objects.get(user_id=user_id)
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
