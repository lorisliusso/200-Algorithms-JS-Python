def two_number_sum(array, targetSum):
    out = []
    for i in range(len(array)):
        num = array[i]
        difference = targetSum - num
        if difference in array[i + 1 :]:
            out = out + [difference, num]
    return out


print("solution:", two_number_sum([3, 5, -4, 8, 11, 1, -1, 6], targetSum=10))
