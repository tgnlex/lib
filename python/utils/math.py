

def factorial(n):
    product = 1
    for i in range(2, n + 1):
        product *= i 
    return product


def adder(x):
    def func(y):
        return x + y
    return func

def doubler(iterable):
    for i in iterable:
        yield i + i
