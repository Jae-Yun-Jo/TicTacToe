from django.db import models

# Create your models here.
class Game_Played(models.Model):
    winner = models.CharField(max_length=24)
    decisions = models.CharField(max_length=12)