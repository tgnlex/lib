import json 
def readonly(filename):
    """
        Open a file with readonly permissions.
        Takes a filename as it's only parametere
    """
    with open(filename, "r") as file: 
        return file;

def read_file(filename):
    """
        Open a file with write permissions.
        Takes a filename as it's only param.
    """
    with open(filename, "r", encoding="utf-8") as file:
        return file.read() 

def read_json(filename):
    """ Read from a json file

        takes filename as it's only param. 
    """

    with open(filename, "r") as file:
        return json.dumps(file.read())


def print_file(filename):
    """
      Read a file and print its content to console. 
      takes a filename as it's only param
    """
    data = read_file(filename)
    return print(data)

def print_json(filename):
    """
      Read a json file and print its content to console.
      takes a filename as it's only parameter.
    """
    data = read_json(filename)
    return print(data)

def write_file(filename, data):
    """ 
      Write to a file.
      takes 2 params: 
        1. filename
        2. data
    """
    with open(filename, "w") as file:
        file.write(data)

    
def write_json(filename, data):
    """
      Write to a json file.
      takes 2 params 
        1. filename
        2. data
    """
    with open(filename, "w") as file:
         file.write(json.dumps(data))


def append_file(filename, data):
     """
       Append a string to the bottom of a file.
       takes 2 params:
         1. filename
         2. contents
     """
     with open(filename, "a") as file:
         file.write("{}\n".format(data))


print_json('test.json')
