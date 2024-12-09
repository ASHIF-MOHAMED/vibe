# Generated by Django 4.2.16 on 2024-12-02 11:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('assessment', '0008_alter_question_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChoiceSolution',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('format', models.CharField(choices=[('text', 'Text'), ('image', 'Image')], default='text', help_text='Format of the option (text or image).', max_length=10)),
                ('value', models.TextField(help_text='The text or image url for the option.')),
                ('marks', models.FloatField(default=0, help_text='Marks for selecting this option.')),
                ('is_correct', models.BooleanField(default=False, help_text='Is this the correct option?')),
                ('question', models.ForeignKey(help_text='Link to the related question.', on_delete=django.db.models.deletion.CASCADE, related_name='choice_solutions', to='assessment.question')),
            ],
        ),
    ]
