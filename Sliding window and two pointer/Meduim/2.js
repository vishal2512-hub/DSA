function longestOnes(s, k) {
    let start = 0; // Window ka starting point
    let zeroCount = 0; // Current window mein 0s ki count
    let maxConsecutive = 0; // Maximum consecutive 1s


    for(let end=0;end<s.lenght;end++) {
        if(s[end]== 0) {
            zeroCount++;
        }

        while(zeroCount >= k) {
            if(s[start]=== 0) {
                zeroCount--;
            }
            start++
        }
        maxConsecutive = Math.max(maxConsecutive, end- start+1)
    }
    return maxConsecutive;
}

let s = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 3;
console.log(longestOnes(s, k)); 