// Sort Characters by frequency

const frequency = (s) => {
    const frequencyMap ={};
    for (const char of s) {
        frequencyMap[char] =(frequencyMap[char] || 0) +1;
    }
    const sorted = Object.entries(frequencyMap).sort((a,b) => b[1]- a[1]);

    let result ="";
    sorted.forEach(([char]) => {
        result += char.repeat(frequencyMap[char]);
    })
    return result;
}
const s = "tree"
console.log(frequency(s));