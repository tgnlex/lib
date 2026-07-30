import random
def factorial(n):
    """ 
        takes a number as a parameter
        and multiplies it by every whole number 
        below it down to one.
    """
    product = 1
    for i in range(2, n + 1):
        product *= i 
    return product


def adder(x):
    """ 
        takes a number as a parameter and 
        returns an adder function that
        takes also takes a number as a parameter
        and adds it to the original parameter
    """
    def func(y):
        return x + y
    return func

def doubler(iterable):
    """ takes an iterable and doubles it """
    for i in iterable:
        yield i + i


def roll_dice():
    """ Returns a random integer between 1 and 6 """
    result = random.randrange(1, 6)
    return result
