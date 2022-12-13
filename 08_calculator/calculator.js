const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(nums) {
	let result = 0;
  for(let i =0;i<nums.length;i++){
    result += nums[i];
  }
  return result;
};

const multiply = function(nums) {
  let result = 1;
  for(let i =0;i<nums.length;i++){
    result *= nums[i];
  }
  return result;
};


const power = function(num,pow) {
	return num ** pow;
};

const factorial = function(num) {
  if(num==0) {return 1;}
	let fact = num;
  for(let i =1;i<num;i++){
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
