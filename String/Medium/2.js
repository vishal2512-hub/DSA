//Maximum Nesting Depth of Paranthesis

function maxdepth(s) {
    let max =0;
    let current =0 ;
    for(const char of s) {
        if (char === '(') {
            current++;
            max = Math.max( current,max);
        }
        else if (char === ')') {
            current--;
        }
    }
    return max;
}
console.log(maxdepth("(1+(2*3)+((8)/4))+1")); // Output: 3
console.log(maxdepth("(1)+((2))+(((3)))"));    // Output: 3
console.log(maxdepth("()(())((()()))"));