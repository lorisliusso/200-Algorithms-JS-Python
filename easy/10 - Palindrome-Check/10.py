# recursive solution:


def is_palindrome_rec(string):
    if len(string) <= 1:
        return True
    if string[0] == string[-1]:
        return is_palindrome_rec(string[1:-1])
    else:
        return False


# iterative solution


def is_palindrome(string):
    while len(string) > 1:
        if string[0] == string[-1]:
            string = string[1:-1]
        else:
            return False
    return True
