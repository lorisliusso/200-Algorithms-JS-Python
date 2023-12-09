def sorted_squared_array(array):
    squared_array = list(map(lambda n: n**2, array))
    squared_array.sort()
    return squared_array


print("Solution:", sorted_squared_array([1, 2, 3, 5, 6, 8, 9]))
