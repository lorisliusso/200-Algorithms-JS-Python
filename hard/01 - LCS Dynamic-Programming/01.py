def longest_common_subsequence(str1, str2):
    if not str1 or not str2:
        return []

    r, c = len(str1), len(str2)
    dp = [""] * (c + 1)

    for row in range(1, r + 1):
        prev = dp[0]
        for col in range(1, c + 1):
            temp = dp[col]
            if str1[row - 1] == str2[col - 1]:
                dp[col] = prev + str1[row - 1]
            else:
                dp[col] = max(dp[col], dp[col - 1], key=len)
            prev = temp

    return list(dp[c])
