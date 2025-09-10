/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.

    When to use:
    - When the array is sorted.
    - When need to compare, sum or difference of two elements.

*/

export const findPairTarget = (nums: number[], target: number) => {
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
