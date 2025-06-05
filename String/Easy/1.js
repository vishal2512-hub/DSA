// remove outermost parenthesis

function removeparenthesis(s) {
  let result = "";
  let count = 0;

  for (let ch of s) {
    if (ch === "(" && count++ > 0) {
      result += ch;
    } else if (ch === ")" && --count > 0) {
      result += ch;
    }
  }
  return result;
}
const s = "(()())(())";
console.log(removeparenthesis(s));
