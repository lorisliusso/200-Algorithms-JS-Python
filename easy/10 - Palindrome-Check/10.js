// recursive solution:

function isPalindromeRec(string){
    if (string.length <= 1){
        return true
    }
    if (string[0] === string.at(-1)){
        return isPalindromeRec(string.slice(1,-1))
}
    else{
        return false
    }
}

// iterative solution

function isPalindrome(string){
    while (string.length > 1){
        if (string[0] === string.at(-1)){
            string = string.slice(1,-1)
        }
        else{
            return false
        }
    }
    return true
}


