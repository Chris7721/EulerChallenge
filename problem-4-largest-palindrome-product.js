function multiplier(n){
  let start, end;
  let palindromes = [];
  if(n == 2){
    start=10; end=99;
  }
  else if(n == 3){
    start=100; end=  999;
  }
  for(let i = start; i <= end; i++){

    for(let j = start; j <= end; j++){
      if(palindromeChecker(i*j)){
        palindromes.push(i*j);
      }
    }
  }
  return maxPalindrome(palindromes);
  //this method should return the array of palindromes || palindromeChecker
}

function palindromeChecker(num){
  if(JSON.stringify(num) === JSON.stringify(num).split("").reverse().join("")){
    return true
  }
  return false
}

function maxPalindrome(palindromes){
  let currLargest = 0;
  for(let i = 0; i <= palindromes.length; i++){
    if(palindromes[i] > currLargest){
       currLargest = palindromes[i];
       }
  }
  return currLargest;
}

console.log(multiplier(3));


//--> Find the largest palindrome made from the product of two n-digit numbers.

//first function takes in the num of digit
//the a nested forloop is run


//created a mehod that would check if the num is a palindrome and push it to an array
//the final method checks for the highest palindrome
