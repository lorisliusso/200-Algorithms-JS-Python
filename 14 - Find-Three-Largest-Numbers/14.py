def find_three_largest_numbers(array):
    lowest = medium = largest = float("-inf")

    for elem in array:
        if elem >= lowest:
            lowest = elem

            if lowest >= medium:
                lowest, medium = medium, lowest

            if medium >= largest:
                largest, medium = medium, largest

            if lowest >= medium:
                lowest, medium = medium, lowest

    return [lowest, medium, largest]
