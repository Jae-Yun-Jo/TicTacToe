from django.shortcuts import render
from .models import Game_Played
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
def index(request):
    return render(request, "tictactoe\TicTacToe_AI.html")
@csrf_exempt
def get_data(request):
    if request.headers.get('x-requested-with') == "XMLHttpRequest":
        print("\n\nThere is an ajax request")
        row = json.load(request)["data"]
        name = row["name"]
        decisions = row["decisions"]
        play = Game_Played.objects.create(winner=name, decisions=decisions)
        play.save()
    return render(request, "tictactoe\TicTacToe_AI.html", {
    })