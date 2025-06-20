function prefix(strs) {
    if (strs.length === 0) return "";
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
            if (ans === "") return "";
        }
    }
    return ans;
}

const strs = ['flower', 'flow', 'flight'];
console.log(prefix(strs));
    