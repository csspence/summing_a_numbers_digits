/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5
*/
const sumDigits = (number) => {
  if(number < 1) { 
    number = number * -1;
  }
  numStr = number.toString();
  let answer = 0;
  for(let i = 0; i < numStr.length; i++) {
    answer += parseInt(numStr[i]);
  }
  return answer;
}