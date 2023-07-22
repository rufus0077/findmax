function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return undefined; 
  }

  let maxNumber = numbers[0]; 

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i]; 
    }
  }

  return maxNumber;
}
const numbers1 = [1, 3, 5, 7, 9];
console.log(findMax(numbers1)); 

const numbers2 = [-1, -3, -5, -7, -9];
console.log(findMax(numbers2)); 

const numbers3 = [10, 2, 8, 4, 6];
console.log(findMax(numbers3)); 

const numbers4 = [];
console.log(findMax(numbers4));