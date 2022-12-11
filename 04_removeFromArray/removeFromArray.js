const removeFromArray = function(numArray,...nums) {
   let arrayNum = numArray;
   for (let num of nums){
   let index = numArray.indexOf(num);
   if (index!=-1){
   numArray.splice(index,1);}
}
   return numArray;
};

// Do not edit below this line
module.exports = removeFromArray;

