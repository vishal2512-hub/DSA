function repeatingCharacter(s) {
    let maxlength = 0;

    for(let start = 0; start < s.length; start++) {
        for(let end = start + 1; end < s.length; end++) {
            let sustring = s.slice(start, end);

            let set = new Set(sustring);
            if(set.size === sustring.length) {
                maxlength = Math.max(maxlength, sustring.length);
            }
        }
    }
    return maxlength;
}

let s = "abcabcbb"
console.log(repeatingCharacter(s)) 