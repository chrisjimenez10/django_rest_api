#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_rest_api.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()



#When to Run Migrations:
    # 1. Create a new model
    # 2. Add, remove, or change fields in an existing model
    # 3. Change options that affect the database schema, such as unique, db_index, etc.
    # -- In other words, we run Migrations ONLY after an action that modifies or has to do with our Database --> Other types of corrections or updates to the code DOES NOT need a Migration
