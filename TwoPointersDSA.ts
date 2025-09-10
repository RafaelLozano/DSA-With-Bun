/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
*/

const twoPointersAlgorithm = (nums: number[], target: number) => {
    let left:number = 0;
    let right:number = nums.length - 1;

    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum === target){
            return [left, right];
        }else if(sum < target){
            left++;
        }else{
            right--;
        }
    }

    return [];
}

console.log(twoPointersAlgorithm([2,7,11,15], 9));
console.log(twoPointersAlgorithm([3,2,4], 6));
console.log(twoPointersAlgorithm([3,3], 6));

console.log(twoPointersAlgorithm([2,5,5,11], 10));