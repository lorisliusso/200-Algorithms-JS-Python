def getNthFib(n):
    if n <= 3:
        if n == 1:
            return 0
        return 1
    return getNthFib(n - 1) + getNthFib(n - 2)