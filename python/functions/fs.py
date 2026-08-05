import os

def get_path(filename):
    """ Takes filename as a parameter and returns the full pathname"""
    os.path.realpath(filename)
