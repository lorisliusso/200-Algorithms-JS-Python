function transposeMatrix(matrix){
    const final_arr = []
    for (i=0; i<matrix[0].length; i++){
        const temp_arr = []
        for (const arr of matrix){
            temp_arr.push(arr[i])
        }
        final_arr.push(temp_arr)
    }

    return final_arr
}