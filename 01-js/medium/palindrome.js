/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function reverse(str){
  let ans="";
  for(let i=str.length-1;i>=0;i--){
    ans+=str[i];
  }
  return ans;
}
function isPalindrome(str) {
  str=str.toLowerCase();
// str1=str.split("").reverse().join("");
let str1=reverse(str);
if(str1===str)return true;
else{
  return false;
}

}

// module.exports = isPalindrome;
let ans=isPalindrome("Madam")
console.log(ans);
