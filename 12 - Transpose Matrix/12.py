def transpose_matrix(matrix):
    final_arr = []
    for i in range(len(matrix[0])):
        temp_arr = []
        for arr in matrix:
            temp_arr.append(arr[i])
        final_arr.append(temp_arr)

    return final_arr
