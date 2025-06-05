class Solution {
    totalFruits(fruits) {
        let left = 0;
        let maxFruits = 0;
        let fruitCount = new Map();

        for (let right = 0; right < fruits.length; right++) {
            fruitCount.set(fruits[right], (fruitCount.get(fruits[right]) || 0) + 1);

            while (fruitCount.size > 2) {
                fruitCount.set(fruits[left], fruitCount.get(fruits[left]) - 1);
                if (fruitCount.get(fruits[left]) === 0) {
                    fruitCount.delete(fruits[left]);
                }
                left++;
            }

            maxFruits = Math.max(maxFruits, right - left + 1);
        }

        return maxFruits; 
    }
}

// Test case
let fruits = [1, 2, 3, 2, 2];
let obj = new Solution();
console.log(obj.totalFruits(fruits)); 
