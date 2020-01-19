from django.contrib import admin

from . models import Client, Room, Reservation

admin.site.register(Client)
admin.site.register(Room)
admin.site.register(Reservation)

# Register your models here.
