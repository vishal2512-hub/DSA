
// largest odd number in string

function oddnumber(s) {
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] % 2 !== 0) {
            return s.substring(0, i + 1);
        }
    }
    return ""; 
}

// Test Cases
console.log(oddnumber("52")); // Output: "5"
console.log(oddnumber("4206")); // Output: ""
console.log(oddnumber("35427")); // Output: "35427"
console.log(oddnumber("123456789")); // Output: "123456789"
