# Generated by Django 3.0.2 on 2020-01-17 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reserva', '0002_room'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='id',
        ),
        migrations.AlterField(
            model_name='room',
            name='numRoom',
            field=models.CharField(max_length=3, primary_key=True, serialize=False),
        ),
    ]
