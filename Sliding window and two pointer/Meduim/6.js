function countNiceSubarrays(nums, k) {
    
    let count =0;
    
    for(let i=0;i<nums.length;i++) {
        let oddcount = 0;

        for(let j=i; j<nums.length;j++)
        {
            if(nums[j] %2 === 1) {
                oddcount++;
            }
            if(oddcount === k) {
                count++;
            }
        }
    }
    return count;
}
let nums = [1, 1, 2, 1, 1];
let k = 3;
console.log(countNiceSubarrays(nums, k)); 