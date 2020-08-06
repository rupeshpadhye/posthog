# Generated by Django 3.0.7 on 2020-08-06 17:05

from django.db import migrations


def forward(apps, schema_editor):
    Funnel = apps.get_model("posthog", "Funnel")
    DashboardItem = apps.get_model("posthog", "DashboardItem")
    for item in Funnel.objects.all():
        filters = item.filters
        filters["insight"] = "FUNNELS"
        DashboardItem.objects.create(
            team=item.team,
            name=item.name,
            deleted=item.deleted,
            filters=filters,
            created_by=item.created_by,
            saved=True,
        )


def reverse(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0075_auto_20200731_1323"),
    ]

    operations = [migrations.RunPython(forward, reverse)]