from django.shortcuts import render

def menu(request):
    return render(request, 'reserva/menu.html', {})

def simple(request):
    return render(request, 'reserva/Simple.html', {})

def formulario(request):
    return render(request, 'reserva/formulario.html', {})


# Create your views here.


