function sumofbeauty(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) { 
      const charCount = {};
      for (let j = i; j < s.length; j++) {
          charCount[s[j]] = (charCount[s[j]] || 0) + 1;
  
          const values = Object.values(charCount);
          let max=Math.max(...values);
          let min=Math.min(...values);
          sum += max - min;
      }
    }
    return sum;
  }
  console.log(sumofbeauty("aabca")); // Output: 5