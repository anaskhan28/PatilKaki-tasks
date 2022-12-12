
const sumofString = "1,2_9,4-3,4^7,5,*7-,99,8,7,5,9,2,1->80"; 

const numbers = sumofString.match(/\d+/g); // Regular expression to match any sequence
console.log(numbers);

// reduce method to sum up all the numbers 
const sum = numbers.reduce((total, number) => total + Number(number), 0);

// value is 253
console.log(sum); 

