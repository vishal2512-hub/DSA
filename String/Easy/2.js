// reverse word in string

function reverseword(s) {
    let words = s.trim().split(/\s+/);
 let result = "";

 for(let i= words.length - 1 ; i>0; i--) {
    result += words[i] + (i> 0 ? " " : "") 
 }
 return result;
}

let s="this is an amazing man";
console.log(reverseword(s));