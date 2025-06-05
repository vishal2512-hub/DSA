function isRotationBruteForce(s1, s2) {
    if (s1.length !== s2.length) return false;

  for(let i=0;i<s1.length; i++) {
    let rotated = s1.slice(i) + s1.slice(0,i);
    if(rotated === s2) return true; 
  }
  return false;
}

console.log(isRotationBruteForce("abcde", "cdeab")); // true
console.log(isRotationBruteForce("abcde", "deabc")); // false
