def is_valid_subsequence(array, sequence):
    if len(sequence) > len(array):
        return False
    seqIdx = 0

    for n in array:
        if sequence[seqIdx] == n:
            seqIdx += 1
        if seqIdx == len(sequence):
            return True
    return False


print("Solution:", is_valid_subsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
