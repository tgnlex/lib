

def noop():
    """ does absolutely nothing """
    pass

def true():
    """ always returns true """
    return True

def false():
    """ always returns false """
    return False

def swap(x, y):
    """ swaps the order of 2 values """
    return y, x

def loop(fn):
    """ runs a function without arguments indefinitely until cancled """
    while True:
        fn()

def loop_with_args(fn, *args):
    """ runs a function with arguments indefinitely until cancled """
    while True:
        fn(*args)

def insert(dictionary, key, value):
    """ inserts an mapping into a dictionary """
    dictionary[key] = value


def doc(fn):
    """ gets the docstring of a function """
    print(fn.__doc__)


