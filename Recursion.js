// Non Recursive Fibonacci and Recursive Fibonacci

function fibs(num) {
    let sum = [0];
    let start = 1;
    for (let i = 0; i < num-1; i++) {
        if (i === 0) {
            sum.push(start);
        } else {
            let first = sum.at(i-1);
            let second = sum.at(i);
            let result = first + second;
            sum.push(result);
        }
    }
    console.log(sum);
}


function fibsRec(num) {
    if (num === 0) {
        return [0];
    }
    if (num === 1) {
        return [0, 1];
    }
    let arr = fibsRec(num - 1);
    let sum = [...arr, arr[num-2] + arr[num-1]];
    return sum;
}

fibs(8);
let sum = fibsRec(3);
console.log(sum);


// Recursive mergeSort

function mergeSort(array) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (array.length <= 1) {
      return array;
    }
  
    // Split the array into two smaller arrays
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
  
    // Recursively sort each half of the array and merge them back together
    return merge(
      mergeSort(left),
      mergeSort(right)
    );
    
    function merge(left, right) {
      const result = [];
      let leftIndex = 0;
      let rightIndex = 0;
      
      // Compare elements from the left and right arrays and add them to the result array
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
      
      // Concatenate any remaining elements from the left and right arrays
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
  }


let array = [1, 78, 29, 42, 69, 108];

console.log(mergeSort(array));

// Leetcode 1. Twosum

var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0 ; i < nums.length ; i++){
        let n = nums[i];
        console.log(map);
        if(map[target-n] >= 0){
            return [map[target-n],i];
        } 
        else {
            map[n] = i;   //use map to store the value and index position
        }
    }
};

let values = [2, 11, 55, 69, 7, 15];
let target = 76;
let answer = twoSum(values, target);
console.log(answer);


// Leetcode 78. Subsets

let subsets = function(nums) {
    let sums = [[]];
    for(num of nums) {
        let arr = [];
        for (let sum of sums) {
            arr.push([...sum, num]);
        }
        sums.push(...arr);
    }
    return sums;
};

let numbers = [1, 2, 3]

console.log(subsets(numbers));
