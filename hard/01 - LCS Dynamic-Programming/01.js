function longestCommonSubsequence(str1, str2) {
    if (!str1 || !str2) {
      return [];
    }
  
    const r = str1.length;
    const c = str2.length;
    const dp = Array(c + 1).fill('');
  
    for (let row = 1; row <= r; row++) {
      let prev = dp[0];
      for (let col = 1; col <= c; col++) {
        const temp = dp[col];
        if (str1[row - 1] === str2[col - 1]) {
          dp[col] = prev + str1[row - 1];
        } else {
          dp[col] = [dp[col], dp[col - 1], prev].sort((a, b) => b.length - a.length)[0];
        }
        prev = temp;
      }
    }
  
    return dp[c].split('');
  }
  
  